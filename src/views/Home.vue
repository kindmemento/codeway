<template>
	<div class="home">
		<nav class="navbar">
			<div class="logo">
				<img src="../assets/icon.png" alt="Codeway Logo" />
			</div>
			<div class="profile">
				<!-- @TODO: Replace with profile logo -->
				<img src="../assets/icon.png" alt="Profile Logo" />
			</div>
		</nav>

		<div class="container">
			<div class="header">
				<div class="column">Parameter Key</div>
				<div class="column">Value</div>
				<div class="column">Description</div>
				<div class="column">Create Date</div>
				<div class="column"></div>
			</div>

			<div class="rows-container">

				<div class="row">
					<div class="column">min_version</div>
					<div class="column">1.4.4</div>
					<div class="column">Minimum required version of the app</div>
					<div class="column">10/05/2021 01:58</div>
					<div class="column actions">
						<button class="edit-btn">Edit</button>
						<button class="delete-btn">Delete</button>
					</div>
				</div>
				
				<div class="row">
					<div class="column">latest_version</div>
					<div class="column">1.4.7</div>
					<div class="column">Latest version of the app</div>
					<div class="column">10/05/2021 01:58</div>
					<div class="column actions">
						<button class="edit-btn">Edit</button>
						<button class="delete-btn">Delete</button>
					</div>
				</div>

				<div class="row">
					<div class="column">pricing_tier</div>
					<div class="column">t6</div>
					<div class="column">Pricing tier of the user</div>
					<div class="column">07/07/2021 11:13</div>
					<div class="column actions">
						<button class="edit-btn">Edit</button>
						<button class="delete-btn">Delete</button>
					</div>
				</div>

				<div class="row">
					<div class="column">scroll</div>
					<div class="column">5</div>
					<div class="column">Index of Scroll Payroll for free users</div>
					<div class="column">25/08/2021 10:22</div>
					<div class="column actions">
						<button class="edit-btn">Edit</button>
						<button class="delete-btn">Delete</button>
					</div>
				</div>

				<div class="row">
					<div class="column">scroll_limit</div>
					<div class="column">13</div>
					<div class="column">Index of Scroll Limit Paywall for free users</div>
					<div class="column">25/08/2021 10:22</div>
					<div class="column actions">
						<button class="edit-btn">Edit</button>
						<button class="delete-btn">Delete</button>
					</div>
				</div>

			</div>

			<div class="add-row">
				<div class="column"><input type="text" placeholder="New Parameter" /></div>
				<div class="column"><input type="text" placeholder="Value" /></div>
				<div class="column"><input type="text" placeholder="New Description" /></div>
				<div class="column actions">
					<button class="add-btn">Add</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
}
</script>

<style scoped>
	.home {
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 10px 3vw 10px 3vw;
		display: flex;
		justify-content: center;
		flex-direction: column;
		/* border: 1px solid red; */
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		width: 100%;
		top: 0;
		left: 0;
		padding: 10px;
		/* border: 1px solid red; */
	}

	.navbar .logo img {
		height: 30px;
	}

	.navbar .profile img {
		height: 30px;
	}

	.container {
		display: flex;
		flex: 1;
		flex-direction: column;
		padding: 2rem;
		/* background-color: #1E1E2E; */
		color: #FFFFFF;
	}

	.header {
		display: flex;
		justify-content: space-between;
		border-radius: 4px;
		/* border: 1px solid red; */
	}

	.header .column {
		flex: 1;
		padding: 0.5rem;
		text-align: left;
		/* border: 1px solid yellow; */
	}

	.rows-container {
		display: flex;
		flex-direction: column;
	}

	.row {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem;
		border-radius: 4px;
		margin-bottom: 0.5rem;
		/* border: 1px solid red; */
	}

	.row .column {
		flex: 1;
		padding: 0.5rem;
		text-align: left;
		/* border: 1px solid yellow; */
	}

	.column .actions {
		display: flex;
		justify-content: space-between;
	}
	
	.edit-btn, .delete-btn, .add-btn {
		padding: 5px 10px;
		margin: 5px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		color: white;
	}

	.edit-btn {
		background: linear-gradient(to bottom, rgb(64, 115, 236), rgb(60, 104, 236));
	}
	
	.delete-btn {
		background: linear-gradient(to bottom, rgb(225, 85, 96), rgb(220, 67, 50));
	}

	.add-btn {
		background: linear-gradient(to bottom, rgb(92, 200, 212), rgb(73, 162, 228));
	}

	.add-row {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem;
		border-radius: 4px;
		margin-top: 0.5rem;
	}

	.add-row .column {
		flex: 1;
		padding: 0.5rem;
	}

	.add-row input {
		width: 100%;
		padding: 0.5rem;
		border: 1px solid #444;
		border-radius: 4px;
		background: none;
		color: white;
	}


</style>