<template>
    <div class="d-flex justify-content-center">
        <h1 class="companyLogo">Holiday Device</h1>
        <b-nav pills class="">            
            <b-nav-item-dropdown
            id="my-nav-dropdown"
            text="Destinations"
            toggle-class="nav-link-custom"
            right
            >
                <b-dropdown-item>One</b-dropdown-item>
                <b-dropdown-item>Two</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Three</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown
            id="my-nav-dropdown"
            text="Speciality Tours"
            toggle-class="nav-link-custom"
            right
            >
                <b-dropdown-item>One</b-dropdown-item>
                <b-dropdown-item>Two</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Three</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item-dropdown
            id="my-nav-dropdown"
            text="Customized Holidays"
            toggle-class="nav-link-custom"
            right
            >
                <b-dropdown-item>One</b-dropdown-item>
                <b-dropdown-item>Two</b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>Three</b-dropdown-item>
            </b-nav-item-dropdown>
        </b-nav>
    </div>
</template>
<style>
    .nav-link{
        color: #6c757d;
        font-size: 1.2rem;
        font-weight: bold;
    }
    .nav-link:hover{
        color: #212529;
    }
    .nav-pills .show .nav-link{
        background-color: #6c757d;
        border: none;
    }

    .companyLogo{
        margin-right: 20%;
    }
</style>