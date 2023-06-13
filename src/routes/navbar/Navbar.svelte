<script lang="ts">
    import {Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button, Input} from 'flowbite-svelte'
    import Search from '../Search.svelte'
</script>


<Navbar let:hidden let:toggle class="!bg-[#9DC08B]">
    <NavBrand href="/">
        <img
            src="/images/younify.png"
            class="mr-3 h-6 sm:h-9"
            alt="Younify Logo"
        />
    </NavBrand>
    <div class="flex md:order-2">
        <Button color="none" data-collapse-toggle="mobile-menu-3" aria-controls="mobile-menu-3" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
            <div class="relative md:block">
                <!-- <Input id="search-navbar" class="pl-3 !rounded-full" placeholder="Search..." /> -->
                <Search />
                <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                </div>
            </div>
        </Button>
        <div class="hidden relative md:block">
            <!-- <Input id="search-navbar" class="pl-3 !rounded-full !bg-[#E5EEDF]" placeholder="Search..." /> -->
            <Search />
            <div class="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:text-white"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
            </div>
        </div>
        <NavHamburger on:click={toggle} />
    </div>
    <NavUl {hidden} class="!bg-[#9DC08B] !border-none">
        <NavLi href="/" class="text-black font-extra-bold !no-underline active:text-white">Home</NavLi>
        <NavLi href="/about" class="text-black font-extra-bold !no-underline active:text-white">About</NavLi>
    </NavUl>
</Navbar>