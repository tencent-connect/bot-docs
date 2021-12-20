<template>
  <div title="我要反馈">
    <div class="app-feed-back-and-help" @click="gotoTXC">
      <div class="logo-wrap"><div class="logo"></div></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoTXC() {
      const form = document.createElement('form');
      form.id = 'form';
      form.name = 'form';
      document.body.appendChild(form);

      const data = {
        nickname: this.getNickname(),
        avatar: 'https://abc-pcweb-1251316161.file.myqcloud.com/others/ost/docs/qq.png',
        openid: this.getOpenID(),
        customInfo: location.href,
      };

      for (const key in data) {
        const input = document.createElement('input');
        input.type = 'text';
        input.name = key;
        input.value = data[key];
        form.appendChild(input);
      }
      form.method = 'POST';
      form.target = '_blank';
      form.action = 'https://support.qq.com/product/366887';
      form.submit();
      document.body.removeChild(form);
    },
    getOpenID() {
      let openid = localStorage.getItem('bot_wiki_openid');
      if (!openid) {
        openid = `bot_openid_${this.randomString(10)}`;
        localStorage.setItem('bot_wiki_openid', openid);
      }
      return openid;
    },
    getNickname() {
      let nickname = localStorage.getItem('bot_wiki_nickname');
      if (!nickname) {
        nickname = `wikiUser_${this.randomString(6)}`;
        localStorage.setItem('bot_wiki_nickname', nickname);
      }
      return nickname;
    },
    randomString(len) {
      const str = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
      let pwd = '';
      for (let i = 0; i < len; i++) {
        pwd += str.charAt(Math.floor(Math.random() * str.length));
      }
      return pwd;
    },
  },
};
</script>
<style>
.app-feed-back-and-help {
  cursor: pointer;
  width: 50px;
  height: 50px;
  position: fixed;
  z-index: 19;
  bottom: 75px;
  right: 23px;
  padding: 10px;
  border-radius: 3px;
  font-size: 13px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.app-feed-back-and-help .logo-wrap {
  cursor: pointer;
  opacity: 0.9;
  padding: 15px 10px 10px;
  border-radius: 50%;
  background: linear-gradient(-180deg, #dadfea, #ebedf5);
}

.app-feed-back-and-help .logo-wrap:hover {
  background: #418dff;
}

.app-feed-back-and-help .logo-wrap:hover .logo {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABGdBTUEAALGPC/xhBQAAAe1JREFUSA29ls8uA1EUxjsqYSOIsCGNjX8bkbDgITyAjfAA3oOFlQXxEHZNI9hJRCJWgoigwkr8j0TQjt9hppk77ZmZzmTmJF/vPd85Pefr3Om9N5dzzLbtBXAEqiBNu6f4Juhxe+dw1tLsqNS+he/L8zGHkpWamuwmnbTqtxBwwGQ6u75GpycR8AOVN+jGzjf0KRgHVuOUOvYSRta6uy7iEC2MUZpL+pJlWROMq+JEsGNyRsEUsLV8ERDVik6iO4Z9bxvBFXBF4rmW3IyAGaeIO2o1Xf4vjyWWJRhySf8o74D6eHzJz/h7YBa0+WKau0OgAEa0hGYEaDUS8c0sQaJG2pdbtUAE/pGcdfDmyx3DX/RxuivvQExTd0/q3UStmWQJ1L8WP/dM/8lmJIkA+X9rdq0F/HwSAUFNgmKGhrgC5Fy4MyqZTtDTMTLjCiizxVaNSqaT+hMIaxAWr8mVJ/BS86JPAhvwdGTbfo1QriwCShES/SlffsLrswfIWSH3jDDbkrOglyw5uwfCsj1xeQnlJvXp4bzTYZxBL9FgfgL3fxNDRAEUQQWkbQ802AAdIsq4WkG2w+2DSQk69s44D3ZdIuH4wTtiqzUQcQhcu2Aih0t2RkNXQIl5V3adnU6OgGXGuJtUMs00lltsZvYLUPxHqiXJxFUAAAAASUVORK5CYII=)
    no-repeat 0;
}

.app-feed-back-and-help .logo-wrap .logo {
  width: 32px;
  height: 28px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAcCAYAAAAAwr0iAAAABGdBTUEAALGPC/xhBQAAAqxJREFUSA21Vs9r1EAUfi/Z7bog1FU8KdWLv26ia1W0rApCD0qhdhdE8CdtL9WbBwX/gB48eShdqeJ1rb21KipbpSC9FARBoVIpiheVqkUQu+b5JWtKEjPJbNqdQ2bmvW++92XeZF6Y/rVypXoewwFi3iMi7NpXu2fiT8Q0njGz18517//qBCpXnt8SsgZWO1g0H3/IptJ58/bo5Gm88WA0uCne1pplbTLEoitNodcgxfZ3GkSyTwMLCC/h8YqZRQ+PFcTv8FxQ4YVkvQE2UwXw2Zkv95eO7gbhTZ9dOeGZdVTYmTbNfJRo7IBeMwxr3EYy1fu4Vcz0uFTiPxdPdcyR0FsVXluAZfFBm0So3qsIPXYHf29segM+6m0eu2/Iw5WqZk55AYfmmbCchIqMj0UxwRl4gjy3wb1DAaGUyvG/XXJQ2oPg2g3Bj8eBtVMQR5TU38AOBEIw4Ro1hljkh9djMe0ikQteW9Q4sQDkd6SvWLgRRl6+Xz0mQlvCfEFb4hTgQCo/LdSyN8FAqnliASLGnIoU9vcRPp8ruQAylEFAqvT5omOSUAAv9RUPfQySuXMxInfHhTl9IgHI/zzud8vH5Jng5mv2DkQHWJthfQF4k28e8VpDicnxmRMddgn+HkeGgjVvp+BhHDDoxx3wO2jzzicmZjMomzWvLXzMY3yn8mJjja0Z/JZtDgeFWZ2fk5cI8ivMi3qxHXVza6hv2civs625AzhPRMOVqTYIHsLWdmJhooO5zBs74C/4qXpgtqSvXuo6vOgIcNfcrVbXLH2mKQjZ69pwRhZRgs/mLHrq2lbSF4tHfoITIerNJ8A2lSuT0yij7Y6bedYwuau3u6B9tdZp9Z8R282PWlLS3szgtszQaojPY7C3p3A96rLRf8cGkSOj1XyDS1YE/wsT+LIWtt/NgQAAAABJRU5ErkJggg==)
    no-repeat 0;
}
</style>
