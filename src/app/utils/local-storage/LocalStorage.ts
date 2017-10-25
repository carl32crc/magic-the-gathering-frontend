
export class LocalStorage {
    public userInfo;
    public token;

    public getUserStorage() {
        const userInfo = JSON.parse(localStorage.getItem('user'));

        return userInfo !== undefined ? this.userInfo = userInfo : this.userInfo = null;
    }

    public getTokenStorage() {
        const token = localStorage.getItem('token');

        return token !== undefined ? this.token = token : this.token = null;
    }

    public getItemStorage(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }

    public setItemStorage(key: string, value): void {

        typeof value === 'string' ? localStorage.setItem(key, value)
                                  : localStorage.setItem(key, JSON.stringify(value));

    }

}
