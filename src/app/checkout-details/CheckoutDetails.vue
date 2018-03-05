<template>
	<main>
		<h1>Checkout details</h1>
        <ticket-summary :ticket="ticket"/>
	</main>
</template>

<script>
    import TicketSummary from '../shared/TicketSummary.vue';
    import { mapActions } from 'vuex';
    
    export default {
        name: 'CheckoutDetails',
        data() {
            return {
                ticket: {
                    status: 'open',
                    summaryText: 'This is a ticket (from Checkouts)',
                },
            };
        },
        components: {
            TicketSummary,
        },
        methods: {
            ...mapActions('checkoutDetailsStore', ['updateTicketStatus']),
        },
        mounted() {
            this.updateTicketStatus(this.ticket.status);
        },
    };
</script>
