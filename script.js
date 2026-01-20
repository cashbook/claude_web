// 네비게이션 활성화
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// 스크롤에 따른 네비게이션 활성화
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// 섹션으로 스크롤 이동
function scrollToSection(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// 폼 제출 처리
function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // 폼 데이터 추출
    const inputs = form.querySelectorAll('input, select, textarea');
    const data = {};
    
    inputs.forEach(input => {
        if (input.value) {
            data[input.placeholder || input.name] = input.value;
        }
    });

    // 성공 메시지
    alert('예약 신청이 완료되었습니다!\n감사합니다. 곧 연락드리겠습니다.');
    
    // 폼 초기화
    form.reset();
}

// 페이지 로드 시 애니메이션
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// 부드러운 스크롤 효과
function smoothScroll(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    const target = document.querySelector(href);
    
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', smoothScroll);
});

// 의료진 정보 상세 보기 (선택사항)
function showDoctorDetail(doctorName) {
    console.log(doctorName + '의 상세 정보를 표시합니다.');
    // 추후 모달이나 상세 페이지로 연동 가능
}

console.log('병원 웹사이트 로드 완료');
