<script>
	import { page } from '$app/stores';
  import logo from '$lib/images/personal-expense-high-resolution-logo-for-navbar.png';
	import Icon from '@iconify/svelte';
   import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, ButtonGroup, Button, Toolbar, ToolbarButton, Tooltip } from 'flowbite-svelte';
     import { AddressBookOutline, BellOutline, DotsHorizontalOutline, EnvelopeOutline, HomeOutline, ImageOutline, ProfileCardOutline, TagOutline, UserCircleOutline, WindowOutline, WindowRestoreSolid } from 'flowbite-svelte-icons';
 

</script>


 
 
<header class="wrapper">
	 <Navbar   class="py-0">
  <NavBrand href="/" class>
    <img src={logo} class="me-3 h-14 " alt="Logo" />
    <!-- <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">PE</span> -->
  </NavBrand>
  <NavHamburger  />
  <NavUl class="py-0">
  <!-- <ButtonGroup class="*:!ring-primary-700">
  <Button><NavLi href="/">Home</NavLi></Button>
  <Button> <NavLi href="/about">About</NavLi></Button>
  <Button>Messages</Button>
</ButtonGroup> -->
<Toolbar class="py-0">
  <NavLi href="/"> <ToolbarButton  >     <HomeOutline class="w-6 h-6 text-custom-lightGreen" /> </ToolbarButton></NavLi>
     <ToolbarButton> <Icon icon="line-md:bell-loop" class="w-6 h-6 text-custom-lightGreen"/> </ToolbarButton>
      <ToolbarButton><DotsHorizontalOutline class="w-6 h-6 text-custom-lightGreen" id="click" /></ToolbarButton>
      <ToolbarButton><UserCircleOutline class="w-6 h-6 text-custom-lightGreen"    /></ToolbarButton>
       <Tooltip trigger="click" triggeredBy="#click" type='light' placement='bottom'>Click tooltip content</Tooltip>
 
</Toolbar>
     
    
   
  </NavUl>
</Navbar>

</header>
 
 

 


 