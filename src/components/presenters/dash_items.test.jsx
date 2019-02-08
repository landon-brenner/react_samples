// Snapshot test for DashItems component. Includes MUI shallow rendering
import React from 'react';
import DashItems from './dash_items';
import { createShallow } from '@material-ui/core/test-utils';

describe('<DashItems />', () => {
  it('matches snapshot', () => {
    const wrapper = createShallow(<DashItems />)
    expect(wrapper).toMatchSnapshot();
  });
});
