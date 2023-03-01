export default function Nav() {
	return (
		<nav className="w-screen flex justify-between items-center p-3">
			<h1 id="logo" className="text-2xl">
				MDB
			</h1>
			<ul className="list-none flex ">
				<li className="mx-2 text-lg hover:cursor-pointer hover:underline hover:text-zinc-300">
					<a href="#">Home</a>
				</li>
				<li className="mx-2 text-lg hover:cursor-pointer hover:underline hover:text-zinc-300">
					<a href="#">Most Viewed</a>
				</li>
				<li className="mx-2 text-lg hover:cursor-pointer hover:underline hover:text-zinc-300">
					<a href="#">Rating</a>
				</li>
			</ul>
		</nav>
	)
}
