import './styles.css';

import Chef from './img/chef.jpg';
import Sif from './img/sif.jpg';
import Rat from './img/rat.jpg';
import Snake from './img/snake.jpg';
import Dung from './img/dung.jpg';
import Chicken from './img/chicken.jpg';
import Flask from './img/flask.jpg';
import Gwyn from './img/gwyn.jpg';


const container = document.createElement("body");
container.id = 'container';
document.body = container;

//Displays the header
function header() {
    const headerElement = document.createElement('div');

    const header = document.createElement('div');
    header.textContent = "Dark Souls Eats";
    header.classList.add('header');
    headerElement.appendChild(header);

    const subheader = document.createElement('p')
    subheader.textContent = "Soulsweet you'll die and want to come back for more!";
    subheader.classList.add('subheader');
    header.appendChild(subheader);

    return headerElement;
}

const headerElement = document.createElement('div');
headerElement.id = 'headerElement';
container.appendChild(headerElement);
headerElement.appendChild(header());

// Displays the tabs
function displayTabs() {
    const mainContent = document.createElement('div');
    mainContent.classList.add('tabBar');

    const homeTab = document.createElement('button');
    homeTab.textContent = "Home";
    homeTab.classList.add('tab', 'home', 'activeTab');
    mainContent.appendChild(homeTab);

    const menuTab = document.createElement('button');
    menuTab.textContent = "Menu";
    menuTab.classList.add('tab', 'menu');
    mainContent.appendChild(menuTab);

    const contactTab = document.createElement('button');
    contactTab.textContent = "Contact Us";
    contactTab.classList.add('tab', 'contact');
    mainContent.appendChild(contactTab);


    return mainContent;
}
 
const allTabs = document.createElement('div');
allTabs.id = 'allTabs';
container.appendChild(allTabs);
allTabs.appendChild(displayTabs());


// Home Page Content
function displayHomePage() {
    const homePageContent = document.createElement('div')
    homePageContent.classList.add('homePageContent');

    const homePageHeader = document.createElement('div');
    homePageHeader.classList.add('homePageHeader');
    homePageHeader.textContent = "Whether you're the The Chosen Undead, the Bearer of the Curse, " + 
    "or the Ashen One, Dark Souls Eats has the cuisine to make your last meal a great one!";
    homePageContent.appendChild(homePageHeader)

    const imageHolder = document.createElement('div');
    imageHolder.classList.add('imageHolder');
    homePageContent.appendChild(imageHolder);

    const chefImgCaption = document.createElement('div');
    chefImgCaption.classList.add('chefImgCaption');
    chefImgCaption.setAttribute('style', 'white-space: pre;');
    chefImgCaption.textContent = 'Meet the Chef\r\n';
    chefImgCaption.textContent += 'This demon used his time in the Asylum to hone his cooking skills.';
    imageHolder.appendChild(chefImgCaption)

    const chefImg = new Image();
    chefImg.src = Chef;
    chefImg.classList.add('chefImg');
    chefImgCaption.appendChild(chefImg);

    const sifImgCaption = document.createElement('div');
    sifImgCaption.classList.add('sifImgCaption');
    sifImgCaption.textContent = 'Pets are Welcome!';
    imageHolder.appendChild(sifImgCaption);

    const sifImg = new Image();
    sifImg.src = Sif;
    sifImg.classList.add('sifImg');

    sifImgCaption.appendChild(sifImg);

    return homePageContent;
}

const homePageContent = document.createElement('div');
homePageContent.id = 'homePageContent';
homePageContent.classList.add('pageContent');
container.appendChild(homePageContent);
homePageContent.appendChild(displayHomePage());


// Menu Page Content
function displayMenuPage() {
    const menuPageContent = document.createElement('div');
    menuPageContent.classList.add('menuPageContent');

    // Rat Menu Item
    const ratHolder = document.createElement('div');
    ratHolder.classList.add('ratHolder');
    menuPageContent.appendChild(ratHolder);

    const ratImgCaption = document.createElement('div');
    ratImgCaption.setAttribute('style', 'white-space: pre;');
    ratImgCaption.classList.add('ratImgCaption');
    ratImgCaption.textContent = "Fried Sewer Rats\r\n";
    ratImgCaption.textContent += 'We finally caught those pesky rats and fried them up for your pleasure.\r\n(We are not responsible for bloodloss.)';
    ratHolder.appendChild(ratImgCaption);

    const ratImg = new Image();
    ratImg.src = Rat;
    ratImg.classList.add('ratImg');
    ratHolder.appendChild(ratImg);

    // Snake Menu Item
    const snakeHolder = document.createElement('div');
    snakeHolder.classList.add('snakeHolder');
    menuPageContent.appendChild(snakeHolder);

    const snakeImgCaption = document.createElement('div');
    snakeImgCaption.setAttribute('style', 'white-space: pre;');
    snakeImgCaption.classList.add('snakeImgCaption');
    snakeImgCaption.textContent = "Fried Frampt and Kaathe Bites\r\n";
    snakeImgCaption.textContent += 'These slippery serperts are fried, and then tossed into a delicous breading.';
    snakeHolder.appendChild(snakeImgCaption);

    const snakeImg = new Image();
    snakeImg.src = Snake;
    snakeImg.classList.add('snakeImg');
    snakeHolder.appendChild(snakeImg);

    // Dung Menu Item
    const dungHolder = document.createElement('div');
    dungHolder.classList.add('dungHolder');
    menuPageContent.appendChild(dungHolder);

    const dungImgCaption = document.createElement('div');
    dungImgCaption.setAttribute('style', 'white-space: pre;');
    dungImgCaption.classList.add('dungImgCaption');
    dungImgCaption.textContent = "Dung\r\n";
    dungImgCaption.textContent += 'For you dung eaters out there,\r\n for you, we have a big wet pile of poo.';
    dungHolder.appendChild(dungImgCaption);

    const dungImg = new Image();
    dungImg.src = Dung;
    dungImg.classList.add('dungImg');
    dungHolder.appendChild(dungImg);

    // Chicken Tenders Menu Item
    const chickenHolder = document.createElement('div');
    chickenHolder.classList.add('chickenHolder');
    menuPageContent.appendChild(chickenHolder);

    const chickenImgCaption = document.createElement('div');
    chickenImgCaption.setAttribute('style', 'white-space: pre;');
    chickenImgCaption.classList.add('chickenImgCaption');
    chickenImgCaption.textContent = "Chicken Tenders with Fries\r\n";
    chickenImgCaption.textContent += 'No respectable restaurant is complete without Chicken Tenders.';
    chickenHolder.appendChild(chickenImgCaption);

    const chickenImg = new Image();
    chickenImg.src = Chicken;
    chickenImg.classList.add('chickenImg');
    chickenHolder.appendChild(chickenImg);

    // Flask Menu Item
    const flaskHolder = document.createElement('div');
    flaskHolder.classList.add('flaskHolder');
    menuPageContent.appendChild(flaskHolder);

    const flaskImgCaption = document.createElement('div');
    flaskImgCaption.setAttribute('style', 'white-space: pre;');
    flaskImgCaption.classList.add('flaskImgCaption');
    flaskImgCaption.textContent = "Estus Flask\r\n";
    flaskImgCaption.textContent += 'A Delicous Estus Flask to wash down your meal\r\n will have you feeling better than ever.';
    flaskHolder.appendChild(flaskImgCaption);

    const flaskImg = new Image();
    flaskImg.src = Flask;
    flaskImg.classList.add('flaskImg');
    flaskHolder.appendChild(flaskImg);

    return menuPageContent;
}

const menuPageContent = document.createElement('div');
menuPageContent.id = 'menuPageContent';
menuPageContent.classList.add('pageContent');
container.appendChild(menuPageContent);
menuPageContent.appendChild(displayMenuPage());

// Contact Us Content
function displayContactPage() {
    const contactPageContent = document.createElement('div');
    contactPageContent.classList.add('contactPageContent', 'contentPage');

    // Gwyn manager display
    const gwynHolder = document.createElement('div');
    gwynHolder.classList.add('gwynHolder');
    contactPageContent.appendChild(gwynHolder);

    const gwynImgCaption = document.createElement('div');
    gwynImgCaption.setAttribute('style', 'white-space: pre;');
    gwynImgCaption.classList.add('gwynImgCaption');
    gwynImgCaption.textContent = "Meet the Owner\r\n";
    gwynImgCaption.textContent += 'Gwyn, Lord of Cinder';
    gwynHolder.appendChild(gwynImgCaption);

    const gwynImg = new Image();
    gwynImg.src = Gwyn;
    gwynImg.classList.add('gwynImg');
    gwynHolder.appendChild(gwynImg);

    const contactInfoHolder = document.createElement('div');
    contactInfoHolder.classList.add('contactInfoHolder');

    const contactInfo = document.createElement('div');
    contactInfo.setAttribute('style', 'white-space: pre;');
    contactInfo.classList.add('contactInfo');
    contactInfo.textContent = "Dark Souls Eats\r\n\r\n";
    contactInfo.textContent += "Now with 3 locations: \r\nKindom of Lodran, Drangelic, Kingdom of Lothric\r\n\r\n";
    contactInfo.textContent += "Email: gitgud@pleasehelp.com";
    contactInfoHolder.appendChild(contactInfo);

    contactPageContent.appendChild(contactInfoHolder);


    return contactPageContent;
}

const contactPageContent = document.createElement('div');
contactPageContent.id = 'contactPageContent';
contactPageContent.classList.add('pageContent');
container.appendChild(contactPageContent);
contactPageContent.appendChild(displayContactPage());


// Event Listener for tabs displaying page content
const allContentPages = document.querySelectorAll('.pageContent')
const allTabBtns = document.querySelectorAll('.tab');

allTabBtns.forEach(tab => {
    tab.addEventListener('click', event => {
        // Removes the activeTab class from all tabs
        for (var i = 0; i < allTabBtns.length; i++) {
            allTabBtns[i].classList.remove('activeTab')
        }
        // Hides all the pageContent except for header and tabs
        for (var i = 0; i < allContentPages.length; i++) {
            allContentPages[i].style.cssText = "display: none;"
        }
        // Adds styling to the selected tab
        if (event.target) {
            tab.classList.add('activeTab');
        }
        // Displays the selected pageContent
        if (event.target.classList.contains('home')) {
            homePageContent.style.cssText = "display: flex;"
        } else if (event.target.classList.contains('menu')) {
            menuPageContent.style.cssText = "display: flex;"
        } else if (event.target.classList.contains('contact')) {
            contactPageContent.style.cssText = "display: flex;"
        }
    })
});