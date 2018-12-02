const TEXT = 'text';
const NUMBER = 'number';

export default [
  { label: 'Product', name: 'name', type: TEXT, required: true },
  { label: 'Container', name: 'container', type: NUMBER, required: true },
  { label: 'Metric', name: 'metric', type: TEXT, required: false },
  { label: 'Count', name: 'count', type: TEXT, required: true },
  { label: 'Notes', name: 'notes', type: TEXT, required: false }
];
