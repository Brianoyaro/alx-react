import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });
  it('checks for existance of NotificationItem component', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('NotificationItem').exists()).toBe(true);
  });
  it('checks for existance of close button', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('img').exists()).toBe(true);
  });
  it('checks for correct text', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
  });
  it('checks for correct list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li').at(0).text()).toEqual('New course available');
    expect(wrapper.find('li').at(1).text()).toEqual('New resume available');
    expect(wrapper.find('li').at(2).html()).toEqual('<li data-priority="urgent"><strong>Urgent requirement</strong> - complete by EOD</li>');
  });
  it('checks correct number of list items', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('li').length).toEqual(3);
  });
});