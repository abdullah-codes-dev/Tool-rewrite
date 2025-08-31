"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Loader2, RefreshCw, Copy, FileText } from "lucide-react";

export default function TextRewriterPage() {
	const [inputText, setInputText] = useState("");
	const [outputText, setOutputText] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const rewriteText = async () => {
		if (!inputText.trim()) {
			alert("Please enter some text to rewrite.");
			return;
		}

		setIsLoading(true);
		try {
			const response = await fetch("/api/rewrite-text", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ text: inputText }),
			});

			if (!response.ok) {
				throw new Error("Failed to rewrite text");
			}

			const data = await response.json();
			setOutputText(data.rewrittenText);
			alert("Text has been rewritten successfully!");
		} catch (error) {
			console.error("Error rewriting text:", error);
			alert("Failed to rewrite text. Please try again.");
		} finally {
			setIsLoading(false);
		}
	};

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(outputText);
			alert("Text copied to clipboard!");
		} catch (error) {
			console.error("Error copying text:", error);
			alert("Failed to copy text.");
		}
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12'>
			<div className='container mx-auto px-4 max-w-4xl'>
				<div className='text-center mb-8'>
					<div className='inline-flex items-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-lg mb-4'>
						<FileText className='mr-2 h-4 w-4' />
						Text Rewriter Tool
					</div>
					<h1 className='text-4xl font-bold tracking-tight text-gray-900 mb-4'>
						Text Rewriter & Spinner
					</h1>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Transform your content with intelligent synonym
						replacement. Create unique variations while preserving
						the original meaning.
					</p>
				</div>

				<div className='grid gap-6 md:grid-cols-2'>
					<Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<FileText className='h-5 w-5 text-blue-600' />
								Original Text
							</CardTitle>
							<CardDescription>
								Enter the text you want to rewrite
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Textarea
								placeholder='Enter your text here...'
								value={inputText}
								onChange={(e) => setInputText(e.target.value)}
								className='min-h-[200px] resize-none'
							/>
							<div className='flex items-center justify-between mt-4'>
								<Badge variant='secondary'>
									{inputText.length} characters
								</Badge>
								<Button
									onClick={rewriteText}
									disabled={isLoading || !inputText.trim()}
									className='bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'>
									{isLoading ? (
										<>
											<Loader2 className='mr-2 h-4 w-4 animate-spin' />
											Rewriting...
										</>
									) : (
										<>
											<RefreshCw className='mr-2 h-4 w-4' />
											Rewrite Text
										</>
									)}
								</Button>
							</div>
						</CardContent>
					</Card>

					<Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
						<CardHeader>
							<CardTitle className='flex items-center gap-2'>
								<RefreshCw className='h-5 w-5 text-purple-600' />
								Rewritten Text
							</CardTitle>
							<CardDescription>
								Your rewritten content will appear here
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Textarea
								placeholder='Rewritten text will appear here...'
								value={outputText}
								readOnly
								className='min-h-[200px] resize-none bg-gray-50'
							/>
							<div className='flex items-center justify-between mt-4'>
								<Badge variant='secondary'>
									{outputText.length} characters
								</Badge>
								<Button
									onClick={copyToClipboard}
									disabled={!outputText}
									variant='outline'>
									<Copy className='mr-2 h-4 w-4' />
									Copy Text
								</Button>
							</div>
						</CardContent>
					</Card>
				</div>

				<Card className='mt-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
					<CardHeader>
						<CardTitle>How It Works</CardTitle>
					</CardHeader>
					<CardContent>
						<div className='grid gap-4 md:grid-cols-3'>
							<div className='text-center'>
								<div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3'>
									<span className='text-blue-600 font-bold'>
										1
									</span>
								</div>
								<h3 className='font-semibold mb-2'>
									Enter Text
								</h3>
								<p className='text-sm text-gray-600'>
									Paste or type the text you want to rewrite
								</p>
							</div>
							<div className='text-center'>
								<div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3'>
									<span className='text-purple-600 font-bold'>
										2
									</span>
								</div>
								<h3 className='font-semibold mb-2'>
									AI Processing
								</h3>
								<p className='text-sm text-gray-600'>
									Our AI finds suitable synonyms and rewrites
									your content
								</p>
							</div>
							<div className='text-center'>
								<div className='w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3'>
									<span className='text-indigo-600 font-bold'>
										3
									</span>
								</div>
								<h3 className='font-semibold mb-2'>
									Get Results
								</h3>
								<p className='text-sm text-gray-600'>
									Copy your rewritten text and use it anywhere
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
