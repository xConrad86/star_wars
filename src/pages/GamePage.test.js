import React from 'react';
import GamePage from './GamePage.js';
import {shallow, mount} from 'enzyme'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom';



describe('Gamepage component test', () => {
    let wrapper;
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState')
    useStateSpy.mockImplementation((init) => [init, setState]); 

    beforeEach(() => {
        wrapper = mount(<GamePage />);
      });
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("Display and compare the html of wrapper", () => {     
        expect(wrapper.html()).toMatchSnapshot();
        wrapper.find('title-wait').exists()
     });
     
     it('Render the page after loading the data ', async () => {                                      
            const promise = () => {
              return new Promise(resolve => {
                jest.setTimeout(() => {
                    act(() => {
                        wrapper.mount()
                        wrapper.update();
                      });
                  
                  resolve(wrapper);
                }, 10000);
              });
            };
            return promise().then((res) => {
              console.log(res.debug());
              expect(wrapper.html()).toMatchSnapshot();
            });                                
    }, 30000);
   
    
  
})