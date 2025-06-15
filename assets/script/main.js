        function updateClock() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            const hourAngle = (hours % 12 + minutes / 60) * 30;
            const minuteAngle = (minutes + seconds / 60) * 6;
            const secondAngle = seconds * 6;

            const hourHand = document.querySelector('.hour-hand');
            const minuteHand = document.querySelector('.minute-hand');
            const secondHand = document.querySelector('.second-hand');

            hourHand.style.transform = `translate(-50%, -100%) rotate(${hourAngle}deg)`;
            minuteHand.style.transform = `translate(-50%, -100%) rotate(${minuteAngle}deg)`;
            secondHand.style.transform = `translate(-50%, -100%) rotate(${secondAngle}deg)`;
        }

        setInterval(updateClock, 1000);
        updateClock(); // 立即更新一次时钟
        
document.addEventListener('DOMContentLoaded', function() {
    const infoModal = document.getElementById('info-modal');
    const infoModal1 = document.getElementById('info-modal1');
    const infoModal2 = document.getElementById('info-modal2');
    const infoModal3 = document.getElementById('info-modal3');
    const infoModal4 = document.getElementById('info-modal4');
    const infoModal5 = document.getElementById('info-modal5');
    const infoModal6 = document.getElementById('info-modal6');

    // 显示弹窗
    function showModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // 隐藏弹窗
    function hideModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // 点击关闭按钮或遮罩层关闭弹窗
    document.querySelectorAll('.modal-close').forEach(button => {
        button.addEventListener('click', function() {
            hideModal(this.closest('.modal-overlay'));
        });
    });

    // 点击遮罩层关闭弹窗
    document.querySelectorAll('.modal-overlay').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                hideModal(this);
            }
        });
    });

    // 控制不同类型的弹窗
    document.getElementById('show-info-modal').addEventListener('click', function(e) {
        e.preventDefault();
        showModal(infoModal);
    });
    
    document.getElementById('show-info-modal1').addEventListener('click', function(e) {
        e.preventDefault();
        showModal(infoModal1);
    });
    
    document.getElementById('show-info-modal2').addEventListener('click', function(e) {
        e.preventDefault();
        showModal(infoModal2);
    });
    
    document.getElementById('show-info-modal3').addEventListener('click', function(e) {
        e.preventDefault();
        showModal(infoModal3);
    });
    
    document.getElementById('show-info-modal4').addEventListener('click', function(e) {
        e.preventDefault();
        showModal(infoModal4);
    });
    
    document.getElementById('show-info-modal5').addEventListener('click', function(e) {
        e.preventDefault();
        showModal(infoModal5);
    });
    
    document.getElementById('show-info-modal6').addEventListener('click', function(e) {
        e.preventDefault();
        showModal(infoModal6);
    });

    // 为 "确定" 按钮添加点击事件，关闭各自的弹窗
    document.querySelector('.modal-button.primary').addEventListener('click', function() {
        hideModal(infoModal);
    });

    document.querySelectorAll('.modal-button.primary')[1].addEventListener('click', function() {
        hideModal(infoModal1);
    });
    
    document.querySelectorAll('.modal-button.primary')[2].addEventListener('click', function() {
        hideModal(infoModal2);
    });
    
    document.querySelectorAll('.modal-button.primary')[3].addEventListener('click', function() {
        hideModal(infoModal3);
    });
    
    document.querySelectorAll('.modal-button.primary')[4].addEventListener('click', function() {
        hideModal(infoModal4);
    });
    
    document.querySelectorAll('.modal-button.primary')[5].addEventListener('click', function() {
        hideModal(infoModal5);
    });
    
    document.querySelectorAll('.modal-button.primary')[6].addEventListener('click', function() {
        hideModal(infoModal6);
    });
});