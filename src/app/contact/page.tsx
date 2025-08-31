"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, MessageSquare, Send, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			alert("Message Sent!");
			setFormData({ name: "", email: "", subject: "", message: "" });
			setIsSubmitting(false);
		}, 1000);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-12'>
			<div className='container mx-auto px-4 max-w-4xl'>
				<div className='text-center mb-12'>
					<Badge className='mb-4 bg-gradient-to-r from-blue-600 to-purple-600'>
						Get In Touch
					</Badge>
					<h1 className='text-4xl font-bold tracking-tight text-gray-900 mb-4'>
						Contact Us
					</h1>
					<p className='text-lg text-gray-600 max-w-2xl mx-auto'>
						Have questions, suggestions, or need help? We&apos;d
						love to hear from you. Send us a message and we&apos;ll
						respond as soon as possible.
					</p>
				</div>

				<div className='grid gap-8 md:grid-cols-3'>
					<div className='md:col-span-2'>
						<Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<MessageSquare className='h-5 w-5 text-blue-600' />
									Send us a Message
								</CardTitle>
								<CardDescription>
									Fill out the form below and we&apos;ll get
									back to you within 24 hours
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form
									onSubmit={handleSubmit}
									className='space-y-4'>
									<div className='grid gap-4 md:grid-cols-2'>
										<div>
											<label
												htmlFor='name'
												className='text-sm font-medium text-gray-700 mb-1 block'>
												Name *
											</label>
											<Input
												id='name'
												name='name'
												value={formData.name}
												onChange={handleChange}
												required
												placeholder='Your full name'
											/>
										</div>
										<div>
											<label
												htmlFor='email'
												className='text-sm font-medium text-gray-700 mb-1 block'>
												Email *
											</label>
											<Input
												id='email'
												name='email'
												type='email'
												value={formData.email}
												onChange={handleChange}
												required
												placeholder='your.email@example.com'
											/>
										</div>
									</div>
									<div>
										<label
											htmlFor='subject'
											className='text-sm font-medium text-gray-700 mb-1 block'>
											Subject *
										</label>
										<Input
											id='subject'
											name='subject'
											value={formData.subject}
											onChange={handleChange}
											required
											placeholder="What's this about?"
										/>
									</div>
									<div>
										<label
											htmlFor='message'
											className='text-sm font-medium text-gray-700 mb-1 block'>
											Message *
										</label>
										<Textarea
											id='message'
											name='message'
											value={formData.message}
											onChange={handleChange}
											required
											placeholder='Tell us more about your inquiry...'
											className='min-h-[120px]'
										/>
									</div>
									<Button
										type='submit'
										disabled={isSubmitting}
										className='w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'>
										{isSubmitting ? (
											<>
												<Send className='mr-2 h-4 w-4 animate-pulse' />
												Sending...
											</>
										) : (
											<>
												<Send className='mr-2 h-4 w-4' />
												Send Message
											</>
										)}
									</Button>
								</form>
							</CardContent>
						</Card>
					</div>

					<div className='space-y-6'>
						<Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<Mail className='h-5 w-5 text-purple-600' />
									Email Us
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-sm text-gray-600 mb-2'>
									For general inquiries and support
								</p>
								<a
									href='mailto:support@example.com'
									className='text-blue-600 hover:text-blue-700 font-medium'>
									support@example.com
								</a>
							</CardContent>
						</Card>

						<Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<Phone className='h-5 w-5 text-green-600' />
									Call Us
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-sm text-gray-600 mb-2'>
									Monday - Friday, 9AM - 6PM EST
								</p>
								<a
									href='tel:+1-555-123-4567'
									className='text-blue-600 hover:text-blue-700 font-medium'>
									+1 (555) 123-4567
								</a>
							</CardContent>
						</Card>

						<Card className='shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<MapPin className='h-5 w-5 text-red-600' />
									Visit Us
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-sm text-gray-600'>
									123 Tech Street
									<br />
									San Francisco, CA 94105
									<br />
									United States
								</p>
							</CardContent>
						</Card>
					</div>
				</div>

				<Card className='mt-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm'>
					<CardContent className='pt-6'>
						<div className='text-center'>
							<h3 className='font-semibold mb-2'>
								Frequently Asked Questions
							</h3>
							<p className='text-sm text-gray-600 mb-4'>
								Before reaching out, you might find your answer
								in our FAQ section.
							</p>
							<div className='grid gap-4 md:grid-cols-2 text-left'>
								<div>
									<h4 className='font-medium text-sm mb-1'>
										Are the tools really free?
									</h4>
									<p className='text-xs text-gray-600'>
										Yes, all our tools are completely free
										to use with no hidden costs.
									</p>
								</div>
								<div>
									<h4 className='font-medium text-sm mb-1'>
										Do you store my data?
									</h4>
									<p className='text-xs text-gray-600'>
										No, we don&apos;t store any of your
										input data. Everything is processed in
										real-time.
									</p>
								</div>
								<div>
									<h4 className='font-medium text-sm mb-1'>
										Can I suggest new tools?
									</h4>
									<p className='text-xs text-gray-600'>
										We love hearing suggestions for new
										tools to add to our platform.
									</p>
								</div>
								<div>
									<h4 className='font-medium text-sm mb-1'>
										Is there an API available?
									</h4>
									<p className='text-xs text-gray-600'>
										We&apos;re working on API access.
										Contact us if you&apos;re interested in
										early access.
									</p>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
