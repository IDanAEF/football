const forms = () => {
    const hideScroll = () => {
        document.querySelector('body').classList.add('fixed');
        document.querySelector('html').classList.add('fixed');
    }

    const showScroll = () => {
        document.querySelector('body').classList.remove('fixed');
        document.querySelector('html').classList.remove('fixed');
    }

    const toggleScroll = () => {
        document.querySelector('body').classList.toggle('fixed');
        document.querySelector('html').classList.toggle('fixed');
    }

    async function postData(url, data) {
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    }

    try {
        const formAjax = document.querySelectorAll('form.form'),
              modal = document.querySelector('.modal'),
              modalSuccess = document.querySelector('.modal__success'),
              modalItems = document.querySelectorAll('.modal__item');

        formAjax.forEach(form => {
            const formBtn = form.querySelector('.btn');

            form.addEventListener('submit', (e) => {
                e.preventDefault();

                formBtn.classList.add('disable');

                const formData = new FormData(form);

                postData(form.action, formData)
                .then((res) => {
                    formBtn.classList.remove('disable');
                    modal.classList.add('active');
                    modalItems.forEach(item => item.classList.remove('active'));
                    modalSuccess.classList.add('active');
                    hideScroll();
                });
            });
        });
    } catch (e) {
        console.log(e.stack);
    }
}

export default forms;