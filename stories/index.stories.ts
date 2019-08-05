import { storiesOf, moduleMetadata } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';

import { MyLibModule } from '../dist/my-lib';

const metadata = {
  declarations: [],
  imports: [
    MyLibModule
  ]
};

storiesOf('My Button', module)
  .add('with text', () => ({
    component: Button,
    props: {
      text: 'Hello Button',
    },
  }))
  .add('with emoji', () => ({
    component: Button,
    props: {
      text: '😀 😎 👍 💯',
    },
  }));

storiesOf('MyLibButton', module)
  .addDecorator(moduleMetadata(metadata))
  .add('default', () => ({
    template: `<lib-button></lib-button>`
  }));
