export default {
    fields: [{
        type: 'input',
        inputType: 'text',
        label: 'ID',
        model: 'id',
        readonly: true,
        disabled: true
    }],
    groups: [{
        legend: 'Contents',
        fields: [{
            type: 'input',
            inputType: 'textarea',
            label: 'Message',
            model: 'content.message'
        },
        {
            type: 'select',
            id: 'network',
            label: 'Network',
            model: 'content.network',
            required: true,
            default: 'facebook',
            values: ['facebook', 'twitter', 'google+'],
            selectOptions: {
                hideNoneSelectedText: true
            }
        },
        {
            type: 'select',
            id: 'network',
            label: 'Type',
            model: 'content.postType',
            required: true,
            default: 'photo',
            values: ['photo'],
            selectOptions: {
                hideNoneSelectedText: true
            }
        },
        {
            type: 'image',
            label: 'Image',
            model: 'content.media.url',
            required: true,
            browse: false,
            preview: true
        }
        ]
    },
    {
        fields: [{
            type: 'vueMultiSelect',
            label: 'Tags',
            placeholder: 'Select a tag',
            model: 'tags',
            required: true,
            values: ['converstaion', 'sales'],
            selectOptions: {
                multiple: true,
                closeOnSelect: false,
                searchable: false,
                showLabels: true,
                taggable: true
            }
        }]
    },
    {
        fields: [{
            type: 'select',
            label: 'Status',
            model: 'status',
            required: true,
            values: ['draft', 'published'],
            selectOptions: {
                hideNoneSelectedText: true
            }
        }]
    },
    {
        fields: [{
            type: 'vueMultiSelect',
            label: 'Channels',
            placeholder: 'Select a channel',
            model: 'channels',
            required: true,
            values: [{
                name: 'Konfirmanden',
                id: 433104606739910
            }],
            selectOptions: {
                multiSelect: false,
                closeOnSelect: true,
                searchable: true,
                showLabels: true,
                label: 'name'
            }
        }]
    },
    {
        fields: [{
            type: 'luxonDateTime',
            model: 'scheduled',
            required: true,
            label: 'Date/Time'
        }]
    },
    {
        legend: 'Geo targeting',
        fields: [{
            type: 'vueMultiSelect',
            label: 'Country',
            placeholder: 'Select a Country',
            model: 'geo.countries',
            required: true,
            values: [{
                value: 'Afghanistan',
                key: '134'
            }],
            selectOptions: {
                multiSelect: false,
                closeOnSelect: true,
                searchable: true,
                showLabels: true,
                label: 'value'
            }
        },
        {
            type: 'vueMultiSelect',
            label: 'Language',
            placeholder: 'Select a Language',
            model: 'geo.languages',
            required: true,
            values: [{
                value: 'Afrikaans',
                key: '31'
            }],
            selectOptions: {
                multiSelect: false,
                closeOnSelect: true,
                searchable: true,
                showLabels: true,
                label: 'value'
            }
        }
        ]
    }
    ]
};
