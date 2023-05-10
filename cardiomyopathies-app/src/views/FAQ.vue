<template>
	<section class="bg-gray-100 text-slate-600 max-w-screen-lg mx-auto">
		<div class="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
			<h2 class="text-4xl text-center font-heading lg:text-5xl mb-3 lg:mb-5">Frequently Asked Questions</h2>
			<p class="mt-4 mb-8 font-serif text-md lg:text-lg text-center italic text-slate-600">This FAQ page will assist you in questions that you may have about navigating through the graph database. This FAQ page will answer queries such as "How do I Log In?".</p>
			<div class="space-y-4">
				<details class="w-full border rounded-lg">
					<summary class="px-4 cursor-pointer  py-6 text-xl font-semibold focus:outline-none focus-visible:ring-violet-400">How do I create an account for my profile page?</summary>
					<p class="text-md lg:text-lg  px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">This is quite simple. In order to do acomplish this you may first click on <a href="login" class="no-underline text-blue-600 hover:underline ...">login</a> from there you must click on the link that says "Don't have an account? Sign Up", here you may add all of your relevent credentials and select your profession.  </p>
				</details>
				<details class="w-full border rounded-lg">
					<summary class="px-4 py-6  cursor-pointer  text-xl font-semibold focus:outline-none focus-visible:ring-violet-400">How do I log in?</summary>
					<p class="px-4 py-6 pt-0 ml-4 text-md lg:text-lg -mt-4 dark:text-gray-400"> Once you have created an account (refer to the previous question if you want to create your account) you may either click on <a href="login" class="no-underline hover:underline ...">login</a> or <a href="login" class="no-underline hover:underline ...">Profile</a> on the side navigation. from there log in by entering your credentials. Once you have done this you will have access to your account </p>
				</details>
				<details class="w-full border rounded-lg">
					<summary class="px-4 py-6 cursor-pointer  text-xl font-semibold focus:outline-none focus-visible:ring-violet-400">How do I view graph data of Cardiomyopthy?</summary>
					<p class="px-4 py-6 pt-0 ml-4 -mt-4 text-md lg:text-lg dark:text-gray-400">On the graph page a drop-down menu will be visible to query the Cardiomyopathy database. You can see an overview comparison of the data, or singular data. you may also compare multiple mutations and genes by clicking on "comparison" on the drop downlist and clicking on the individual mutations genes and patient condition such as scaring.  </p>
				</details>
        <details class="w-full border rounded-lg">
					<summary class="px-4 py-6 cursor-pointer  text-xl font-semibold focus:outline-none focus-visible:ring-violet-400">I forgot my password, What do I do?</summary>
					<p class="px-4 py-6 pt-0 ml-4 -mt-4 text-md lg:text-lg dark:text-gray-400">In the <a href="login" class="no-underline hover:underline ...">Login</a>  page click on the hyperlink which says <a href="reset-password" class="no-underline hover:underline ...">Forget Password</a> add your E-Mail address which was associated with your account and click on "reset password";  </p>
				</details>
        <details class="w-full border rounded-lg">
					<summary class="px-4 py-6 cursor-pointer text-xl font-semibold focus:outline-none focus-visible:ring-violet-400">How do I change my account details?</summary>
					<p class="px-4 py-6 pt-0 ml-4 -mt-4 text-md lg:text-lg dark:text-gray-400">Once you have logged on click on the text boxes of information that you wish to edit. once you are happy with your changes click on "save changes" you are done. you may also change your E-mail and Password from this page. <img  class="object-scale-down h-200 w-96 mt-6 rounded-lg" src="src/assets/img/profile-change.png"> </p>
				</details>
        <details class="w-full border rounded-lg">
					<summary class="px-4 py-6 cursor-pointer  text-xl font-semibold focus:outline-none focus-visible:ring-violet-400">How do I add a new patient?</summary>
					<p class="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 text-md lg:text-lg">On the profile page click on the add patient button <img  class="inline-flex" src="src/assets/img/add-patient.png">, from there fill out the relevent credentials of that patient and click on save. your paitent data will be saved. <img  class="object-scale-down h-500 w-100 mt-6 rounded-lg" src="src/assets/img/patient.png"></p>
				</details>
        <details class="w-full border rounded-lg">
					<summary class="px-4 py-6 cursor-pointer  text-xl font-semibold focus:outline-none focus-visible:ring-violet-400">How do I add a new record?</summary>
					<p class="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 text-md lg:text-lg ">To add new record. on the profile page click on the Add Record button  <img  class="inline-flex" src="src/assets/img/add-record.png">. From here you can select a paitent you wish to add the records for and input their correct credentials. <img  class="object-scale-down h-500 w-100 mt-6 rounded-lg" src="src/assets/img/record.png"></p>
				</details>
        <details class="w-full border rounded-lg">
					<summary class="px-4 py-6 cursor-pointer  text-xl font-semibold focus:outline-none focus-visible:ring-violet-400">How do I view my created record and edit and delete it?</summary>
					<p class="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 text-md lg:text-lg">In the profile page click on the 'View table' button  <img  class="inline-flex" src="src/assets/img/view-table.png">, now you are able to see all of the  records you inserted earlier. To delete any records just click on the red trash can. to edit a record click on the orange pen and paper icon and edit the records you wish- once you are done click save <img  class="object-scale-down h-500 w-100 mt-6 rounded-lg" src="src/assets/img/patient-table.png"> </p> 
				</details>
        <details class="w-full border rounded-lg">
					<summary class="px-4 py-6 cursor-pointer  text-xl font-semibold focus:outline-none focus-visible:ring-violet-400">How do I log out?</summary>
					<p class="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 text-md lg:text-lg">To logout. simply click the logout button on the side navigation. <img  class="inline-flex" src="src/assets/img/Log-out-button.png"> </p>
				</details>
			</div>
		</div>
	</section>
</template>
