import LogoutButton from './LogoutButton'
import { MenuToggle } from './MenuToggle'

type Props = {}

export default function Navbar({ }: Props) {
	return (
		<header className="h-[5rem] top-0 z-20">
			<nav className="fixed h-[5rem] w-full flex bg-white border-b-[#E3E8F2] border-b-[1px]">
				<div className="items-center max-w-[17rem] w-full lg:px-8 px-4 flex justify-center">
					<span className="text-lg font-bold uppercase text-secondary-orange">Investment Admin</span>
				</div>
				<div className="flex items-center justify-end w-full gap-4 py-5 pr-4 lg:px-8">
					<LogoutButton className="hidden lg:block" />
					<MenuToggle className="lg:hidden" />
				</div>
			</nav>
		</header>
	)
}