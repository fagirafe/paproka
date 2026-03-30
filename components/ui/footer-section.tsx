'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const imgLogoWord2026 = "http://localhost:3845/assets/b92cdd34714baf4251d48327afd6406714070472.svg";

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Меню',
		links: [
			{ title: 'О нас', href: '#about' },
			{ title: 'Кейсы', href: '#cases' },
			{ title: 'Процесс работы', href: '#process' },
			{ title: 'Нам доверяют', href: '#clients' },
		],
	},
	{
		label: 'Студия',
		links: [
			{ title: 'Команда', href: '#team' },
			{ title: 'Карьера', href: '#career' },
			{ title: 'Контакты', href: '#contacts' },
		],
	},
	{
		label: 'Социальные сети',
		links: [
			{ title: 'Telegram', href: 'https://t.me/' },
			{ title: 'Behance', href: 'https://behance.net/' },
		],
	},
];

export function FooterSection() {
	return (
		<footer className="w-full flex flex-col items-center justify-center border-t border-[rgba(0,0,0,0.1)] pt-[48px] mt-[48px]">
			<div className="grid w-full gap-[32px] xl:grid-cols-3 xl:gap-[80px]">
				<AnimatedContainer className="flex flex-col gap-[16px]">
					<div className="h-[32px] w-[180px]">
						<img alt="Paprika" className="block max-w-none h-full" src={imgLogoWord2026} />
					</div>
					<p className="text-[14px] text-[rgba(0,0,0,0.4)] font-medium">
						© {new Date().getFullYear()} Paprika Design Studio. Все права защищены.
					</p>
				</AnimatedContainer>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-[32px] xl:col-span-2">
					{footerLinks.map((section, index) => (
						<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
							<div className="flex flex-col gap-[16px]">
								<h3 className="font-semibold text-[16px] text-black">{section.label}</h3>
								<ul className="flex flex-col gap-[12px]">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="font-medium text-[16px] text-[#3d3d3d] hover:text-[#ee2733] transition-colors duration-200 inline-flex items-center"
											>
												{link.icon && <link.icon className="me-[8px] size-[16px]" />}
												{link.title}
											</a>
										</li>
									))}
								</ul>
							</div>
						</AnimatedContainer>
					))}
				</div>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
