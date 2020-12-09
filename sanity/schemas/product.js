import { BsFillBagFill as icon } from 'react-icons/bs';

export default {
  title: 'Product',
  name: 'product',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 1000,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price in american dollar',
      validation: (Rule) => Rule.min(3).max(50000),
    },
  ],
  preview: {
    select: {
      name: 'name',
      price: 'price',
      image: 'image',
    },
    prepare({ name, price, image }) {
      console.log({ name, price });
      return {
        title: name,
        media: image,
        subtitle: `Price is ${price}`,
      };
    },
  },
};
