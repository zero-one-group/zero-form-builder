import { useZeroForm, ZeroFormOptions } from '@zero-form-builder/core';

export function example() {
  const data = {
    name: 'YOUR NAME',
    company_name: 'YOUR COMPANY NAME',
    gender: '1',
  };
  const options: ZeroFormOptions = {
    name: {
      type: 'text',
      label: 'Nama kamu',
    },
    gender: {
      type: 'checkbox',
      label: 'Gender kamu',
      checkboxes: [
        { name: 'Laki', value: '1' },
        { name: 'Perempuan', value: '2' },
      ],
    },
  };

  return useZeroForm({ data, options });
}
