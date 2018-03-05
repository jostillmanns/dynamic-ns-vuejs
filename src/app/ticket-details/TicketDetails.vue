<template>
	<main>
		<h1>Ticket details</h1>
        <ticket-summary :ticket="ticket"/>
	</main>
</template>

<script>
    import TicketSummary from '../shared/TicketSummary.vue';
    import { mapActions } from 'vuex';

    export default {
        name: 'TicketDetails',
        data() {
            return {
                ticket: {
                    status: 'closed',
                    summaryText: 'This is a ticket (from Ticket)',
                },
            };
        },
        components: {
            TicketSummary,
        },
        methods: {
            ...mapActions('ticketDetailsStore', ['updateTicketStatus']),
        },
        mounted() {
            this.updateTicketStatus(this.ticket.status);
        },
    };
</script>
