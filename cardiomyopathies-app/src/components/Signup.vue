<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-sm px-6 py-8 bg-white shadow-md">
      <h1 class="text-xl font-semibold mb-6 text-gray-800">Signup</h1>
      <form>
        <div class="mb-4">
          <label class="block mb-2 text-gray-800" for="name">Name</label>
          <input
            class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-gray-800" for="email">Email</label>
          <input
            class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-gray-800" for="password">Password</label>
          <input
            class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-gray-800" for="confirm-password">Confirm Password</label>
          <input
            class="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-blue-400"
            type="password"
            name="confirm-password"
            id="confirm-password"
            required
          />
        </div>
        <button
          class="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:shadow-outline-blue"
          type="submit"
        >
          Signup
        </button>
      </form>
    </div>
  </div>
</template>
