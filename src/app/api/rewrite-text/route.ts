import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const { text } = await request.json();

		if (!text || typeof text !== "string") {
			return NextResponse.json(
				{ error: "Text is required" },
				{ status: 400 }
			);
		}

		// Split text into words
		const words = text.split(/\s+/);
		const rewrittenWords = [];

		for (const word of words) {
			// Clean the word (remove punctuation for API call)
			const cleanWord = word.replace(/[^\w]/g, "").toLowerCase();

			if (cleanWord.length < 3) {
				// Keep short words as is
				rewrittenWords.push(word);
				continue;
			}

			try {
				// Fetch synonyms from Datamuse API
				const response = await fetch(
					`https://api.datamuse.com/words?rel_syn=${cleanWord}&max=5`
				);
				const synonyms = await response.json();

				if (synonyms.length > 0) {
					// Pick a random synonym
					const randomSynonym =
						synonyms[
							Math.floor(
								Math.random() * Math.min(synonyms.length, 3)
							)
						];

					// Preserve original capitalization and punctuation
					let newWord = randomSynonym.word;
					if (word[0] === word[0].toUpperCase()) {
						newWord =
							newWord.charAt(0).toUpperCase() + newWord.slice(1);
					}

					// Add back punctuation
					const punctuation = word.replace(/\w/g, "");
					if (punctuation) {
						newWord += punctuation.slice(-1);
					}

					rewrittenWords.push(newWord);
				} else {
					rewrittenWords.push(word);
				}
			} catch (error) {
				console.log("Error fetching synonyms:", error);
				// If API fails, keep original word
				rewrittenWords.push(word);
			}
		}

		const rewrittenText = rewrittenWords.join(" ");

		return NextResponse.json({ rewrittenText });
	} catch (error) {
		console.error("Error rewriting text:", error);
		return NextResponse.json(
			{ error: "Failed to rewrite text" },
			{ status: 500 }
		);
	}
}
