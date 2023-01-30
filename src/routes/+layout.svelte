<nav>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/blogs">Blogs</a>
		</li>
	</ul>
</nav>

<slot />

<style>
	nav {
		background-color: grey;
	}

	ul {
		display: flex;
	}

	li {
		list-style: none;
		margin: 15px;
	}

	a {
		text-decoration: none;
		color: white;
	}

	a:hover {
		color: black;
	}
</style>
