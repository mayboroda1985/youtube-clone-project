const Page = require('./Page');

class ProfilePage extends Page {

    get adminName() {
        return $('//h3[normalize-space()="AnnaMia0306"]');
    }

    get editProfile() {
        return $('//button[@class="sc-AxirZ jFZwyC"]');
    }

    open() {
        return super.open('/feed/my_videos');
    }
}

module.exports = new ProfilePage();
