export default {
    fields: [{
        type: 'luxonDateTime',
        model: 'timestamp',
        required: true,
        label: 'Date of entry'
    },
    {
        type: 'input',
        inputType: 'number',
        model: 'post_impressions_organic.value',
        label: 'Organic impressions'
    },
    {
        type: 'input',
        inputType: 'number',
        model: 'post_impressions_viral.value',
        label: 'Viral impressions'
    },
    {
        type: 'input',
        inputType: 'number',
        model: 'post_impressions_paid.value',
        label: 'Paid impressions'
    }
    ]
};
