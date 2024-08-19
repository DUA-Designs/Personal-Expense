<script>
import { base } from '$app/paths';
  import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper, SidebarDropdownItem, SidebarDropdownWrapper, NavLi } from 'flowbite-svelte';
  import { ChartPieSolid, GridSolid, CartSolid, MailBoxSolid, UserSolid, ArrowRightToBracketOutline, EditOutline, CaretRightOutline, TagSolid } from 'flowbite-svelte-icons';
  let spanClass = 'flex-1 ms-3 whitespace-nowrap';
  import Icon from '@iconify/svelte';
	import { page } from '$app/stores';
    $: activeUrl = $page.url.pathname;
  let activeClass = 'flex  hover:no-underline  items-center p-2 text-base font-normal text-primary-900 bg-primary-200 dark:bg-primary-700 rounded-lg dark:text-white hover:bg-primary-100 dark:hover:bg-gray-700';
  let nonActiveClass = 'flex  hover:no-underline items-center p-2 text-base font-normal text-green-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-green-700';
</script>

<Sidebar {activeUrl} {activeClass} {nonActiveClass}>
  <SidebarWrapper class="bg-white rounded-none">
    <SidebarGroup  >
      <SidebarItem label="Dashboard" href="{base}/"  >
        <svelte:fragment slot="icon">
          <ChartPieSolid class="w-6 h-6 text-gray-500 transition duration-75 text-custom-lightGreen group-hover:text-gray-900 dark:group-hover:text-white" />
        
        </svelte:fragment>
        
      </SidebarItem>
        

      
 
  <SidebarItem label="Transactions" href="{base}/transactions">
        <svelte:fragment slot="icon">
        <Icon icon="mingcute:transfer-fill"  class="w-6 h-6 text-gray-500 transition duration-75 text-custom-lightGreen "  style="color: #5ebc67" />
 
        </svelte:fragment>
      </SidebarItem>
  
 
 
  <SidebarItem label="Budget" href="{base}/budget">
        <svelte:fragment slot="icon">
          <Icon icon="ph:wallet-fill"   class="w-6 h-6 text-gray-500 transition duration-75 text-custom-lightGreen group-hover:text-gray-900 dark:group-hover:text-white" style="color: #5ebc67" /> 
        </svelte:fragment>
      </SidebarItem> 
      

        <SidebarItem label="Reports" href="{base}/reports">
        <svelte:fragment slot="icon">
        <Icon icon="icon-park-solid:table-report" class="w-6 h-6 text-gray-500 transition duration-75 text-custom-lightGreen group-hover:text-gray-900 dark:group-hover:text-white"  style="color: #5ebc67" />
        
        </svelte:fragment>
      </SidebarItem> 
 
        <SidebarItem label="Categories" href="{base}/categories">
        <svelte:fragment slot="icon">
          <Icon icon="ic:round-category" class="w-6 h-6 text-gray-500 transition duration-75 text-custom-lightGreen  " style="color: #5ebc67"{base}/>
        </svelte:fragment>
      </SidebarItem>
 
  <SidebarItem label="Tags" href="{base}/tags">
        <svelte:fragment slot="icon">
          <TagSolid class="w-6 h-6 text-gray-500 transition duration-75 text-custom-lightGreen group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
 
  <SidebarItem label="Accounts" href="{base}/accounts">
        <svelte:fragment slot="icon">
          <Icon icon="mdi:bank"  style="color: #5ebc67" class="w-6 h-6" />
        </svelte:fragment>
      </SidebarItem>
 
  <SidebarItem label="Income" href="{base}/income">
        <svelte:fragment slot="icon">
        <Icon icon="tdesign:undertake-transaction"  style="color: #5ebc67" class="w-6 h-6" />
          
        </svelte:fragment>
      </SidebarItem>
 
 
      <!-- <SidebarDropdownWrapper label="E-commerce">
        <svelte:fragment slot="icon">
          <CartSolid class="w-6 h-6 text-gray-500 transition duration-75 text-custom-lightGreen group-hover:text-custom-lightGreen dark:group-hover:text-white" />
        </svelte:fragment>
        <SidebarDropdownItem label="Products" />
        <SidebarDropdownItem label="Billing" />
        <SidebarDropdownItem label="Invoice" />
      </SidebarDropdownWrapper>
      <SidebarItem label="Kanban" {spanClass}>
        <svelte:fragment slot="icon">
          <GridSolid class="w-6 h-6 text-gray-500 transition duration-75 text-custom-lightGreen group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span class="inline-flex justify-center items-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300"> Pro </span>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Inbox" {spanClass}>
        <svelte:fragment slot="icon">
          <MailBoxSolid class="w-6 h-6 text-gray-500 transition duration-75 text-custom-lightGreen group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
        <svelte:fragment slot="subtext">
          <span class="inline-flex justify-center items-center p-3 ms-3 w-3 h-3 text-sm font-medium text-primary-600 bg-primary-200 rounded-full dark:bg-primary-900 dark:text-primary-200"> 3 </span>
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Users">
        <svelte:fragment slot="icon">
          <UserSolid class="w-6 h-6 text-gray-500 transition duration-75 text-custom-lightGreen group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign In">
        <svelte:fragment slot="icon">
          <ArrowRightToBracketOutline class="w-6 h-6 text-gray-500 transition duration-75 text-custom-lightGreen group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem>
      <SidebarItem label="Sign Up">
        <svelte:fragment slot="icon">
          <EditOutline class="w-6 h-6 text-gray-500 transition duration-75 text-custom-lightGreen group-hover:text-gray-900 dark:group-hover:text-white" />
        </svelte:fragment>
      </SidebarItem> -->
    </SidebarGroup>
  </SidebarWrapper>
</Sidebar>


 