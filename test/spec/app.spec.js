'use strict';

describe('app', function () {

  beforeEach(function() {
    // app.init();
  });

  it("should be able to made a xhr call", function() {
    expect(app.getMenuData).toBeDefined();
    expect(app.getMenuData()).toBe(true);
  });

  describe('A creation of the menu', function() {
    it('should create an element', function() {
      var testEl = document.createElement('li');
      testEl.setAttribute('class', 'testClass');
      expect(app.createElement).toBeDefined();
      expect(app.createElement('li','testClass')).toEqual(testEl);
    });

    it('should create a complete menu', function() {
      var menuSource = {
        'items':[{
          'label':'Work',
          'url':'#/work',
          'items':[]
        }]},
        classListTest = ['nav', 'nav-item', 'item'],
        testEl = document.createElement('ul'),
        li =  document.createElement('li'),
        a =  document.createElement('a');

        //set clases
        testEl.classList.add(classListTest[0]);
        li.classList.add(classListTest[1]);
        a.classList.add(classListTest[2]);

        a.setAttribute('href', '#/work');
        a.textContent = 'Work';
        li.appendChild(a);
        testEl.appendChild(li);

      expect(app.createMenu).toBeDefined();
      expect(app.createMenu(menuSource, classListTest)).toEqual(testEl);

    });
  });

  it('should remove or add a class', function() {
    var testEl = document.createElement('li');

    expect(app.toggleClass).toBeDefined();
    //adding the class
    app.toggleClass(testEl, 'testClass');
    expect(testEl.classList.toString()).toEqual('testClass');
    //removing the class
    app.toggleClass(testEl, 'testClass');
    expect(testEl.classList.toString()).toEqual('');

  });

  

});
