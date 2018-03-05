<template>
	<div>
        <p>Summary: {{ ticket.summaryText }}</p>
        <ticket-status/>
	</div>
</template>

<script>
    import TicketStatus from '../shared/TicketStatus.vue';

    export default {
        name: 'TicketSummary',
        props: {
            ticket: {
                type: Object,
            }
        },
        components: {
            TicketStatus,
        },
    };
</script>
