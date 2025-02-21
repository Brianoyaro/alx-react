import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  it('checks for existance of classnames', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.find('div').hasClass('App-header')).toBe(true);
    expect(wrapper.find('div').hasClass('App-body')).toBe(true);
    expect(wrapper.find('div').hasClass('App-footer')).toBe(true);
  });
})

