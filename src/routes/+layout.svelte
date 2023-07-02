<nav>
	<a href="/">home</a>
	<a href="/about">about</a>
	<a href="/experiences">experiences</a>
	<a href="/projects">projects</a>
</nav>

<slot />

<style>
	nav {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	/* Flex container for horizontal layout */
	nav {
		display: flex;
		justify-content: space-between;
		background-color: #f8f8f8;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	}

	/* Remove default link styles and apply modern styles */
	nav a {
		color: #333;
		text-decoration: none;
		padding: 10px;
		border-radius: 3px;
		transition: background-color 0.3s ease;
	}

	nav a:hover {
		background-color: #e8e8e8;
	}

	nav a.active {
		background-color: #333;
		color: #fff;
	}

	/* Add spacing between links */
	nav a + a {
		margin-left: 10px;
	}
</style>
