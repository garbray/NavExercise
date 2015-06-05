/**
 *
 * Name v0.0.1
 * Description, by Bryan Garzon B.
 *
 * Free to use under the MIT License.
 *
 */

(function (root) {
  'use strict';

  //global name space
  var app = app || {},
      $, $$;

  //mimic $ for id search and $$ for class search
  $ = function (Id) {
    return document.querySelector(Id);
  };

  $$ = function (className) {
    return document.querySelectorAll(className);
  };


  /**
   * @param url to request the data source
   * @return {object} data fetched
  */
  app.getMenuData = function () {

    var self = this,
        oReq = new XMLHttpRequest();

    oReq.open('get', '/api/nav.json', true);
    oReq.send();

    function dataSerialization (evt) {
      var menuData = JSON.parse(evt.currentTarget.response),
          classList = ['nav', 'nav-item', 'item'],
          nav = document.getElementById('navigation'),
          menu;

      menu = self.createMenu(menuData, classList);
      nav.appendChild(menu);
      self.addEvents();
    }

    oReq.addEventListener('load', dataSerialization, false);
    return true;
  };

  /**
   * @param menuData response from the API
   * @param classList list of classes
   * @return a complete menu
  */
  app.createMenu = function (menuData, classList) {
    var self = this,
        itemList = menuData.items,
        len = itemList.length,
        ul = self.createElement('ul', classList[0]);

    for (var i = 0; i < len; i++) {
      var li = self.createElement('li', classList[1]),
          a = self.createElement('a', classList[2]),
          span, temp;

      a.setAttribute('href', itemList[i].url);
      a.textContent = itemList[i].label;
      li.appendChild(a);
      
      if (itemList[i].items && itemList[i].items.length > 0) {
        span = self.createElement('span', 'arrow');
        a.classList.add('open-submenu');
        a.appendChild(span);
        temp = self.createMenu(
          itemList[i],
          ['sub-menu', 'sub-menu-item', 'sub-item']
        );
        li.appendChild(temp);
      }
      ul.appendChild(li);
    }
    return ul;
  };

  /**
   * Create element and add class
   * @param element name
   * @param element's class
   * @return nodeElement
  */
  app.createElement = function (el, elClass) {
    var elTemp = document.createElement(el);
    elTemp.setAttribute('class', elClass);
    return elTemp;
  };

  /**
   * Add or remove class
   * @param element
   * @param element's class
   * @param action (remove, add)
  */
  app.toggleClass = function (el, elClass) {
    el.classList.toggle(elClass);
    return el;
  };

  /**
   * togle a list of elements
   * @param array of elements
   * @param class
  */
  app.toggleList = function (list, elClass) {
    var self = this,
        len = list.length;
    for (var i = 0; i < len; i++) {
      self.toggleClass(list[i] ,elClass);
    }
  };
  /**
   * Subscribe all events
   * @return bolean
  */
  app.addEvents = function () {
    var self = this,
        menu = $('#menu'),
        nav = $('#header'),
        mask = $('#mask'),
        logo = $('#logo'),
        openSubmenu = $$('.open-submenu'),
        len = openSubmenu.length,
        previousNode;

    menu.addEventListener('click', function () {
      self.toggleList([menu, nav, mask, logo], 'open');
    });

    mask.addEventListener('click', function () {
      // if a submenu is open close it
      if (previousNode) {
        if (previousNode.classList.contains('open')) {
          previousNode.classList.toggle('open');
        } else {
          previousNode.parentElement.classList.toggle('open');
        }
        previousNode = undefined;
      }
      // if mobile menu is open close it
      if (menu.classList.contains('open')) {
        menu.click();
      } else {
        mask.classList.toggle('open');
      }
    });

    var openMenu = function(evt) {
      // add open class to the parent of the clicked element
      evt.currentTarget.parentElement.classList.toggle('open');
      
      //review if the mask if already open if doesnt it opened
      if (!mask.classList.contains('open')) {
        mask.classList.toggle('open');
      }
      //close a previous tab open
      if (previousNode && previousNode !== evt.currentTarget) {
        previousNode.parentElement.classList.toggle('open');
        previousNode = evt.currentTarget;
      }
      // remove mask and previousNode if click the same element
      else if (previousNode && previousNode === evt.currentTarget) {
        mask.classList.toggle('open');
        previousNode = undefined;
      }
      //if previousNode doesn't exist
      else {
        previousNode = evt.currentTarget;
      }
      return false;
    };

    for (var i = 0; i < len; i++) {
      openSubmenu[i].addEventListener('click', openMenu);
    }

    return true;
  };

  /**
   * Init all the logic proccess
   * @return bolean
  */
  app.init = function () {
    var self = this;
    self.getMenuData();
    return true;
  };

  //set the app globaly
  root.app = app;
  app.init();


})(window);
