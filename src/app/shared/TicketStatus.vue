<template>
	<div>
        <p>Status: <strong>{{ getTicket.status }}</strong></p>
	</div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'TicketStatus',
        computed: {
            ...mapGetters('sharedStore', ['getTicket']),
        },
    };
</script>
