import {observer} from "mobx-react-lite";
import {useStore} from "@/store/index";
import React from "react";

const SideBar = () => {
	const {lang} = useStore()
	const scrollToAnchor = (e, anchorName) => {
		e.preventDefault();
		if (anchorName) {
			let anchorElement = document.getElementById(anchorName);
			if (anchorElement) {
				const lastActiveElement = document.getElementsByClassName('active')
				lastActiveElement[0].classList.remove('active')
				anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
				e.target.classList.add('active')
			}
		}
	}
	const MAX_SIDEBAR_NUM = 14;
	const sideBarItems = []

	for (let i = 1; i <= MAX_SIDEBAR_NUM; i++) {
		sideBarItems.push(
			// @ts-ignore
			<a
				// @ts-ignore
				className={i === 1 ? 'nav active' : 'nav'}
				href={`#block${i}`}
				key={i}
				onClick={(e) => scrollToAnchor(e, `block${i}`)}
			>
				{/*@ts-ignore*/}
				{lang.t(`faq.sidebar.option${i}`)}
			</a>)
	}
	return (
		<>
			{sideBarItems}
		</>
	)
}

export default observer(SideBar)
