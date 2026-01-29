// 共通Navbarの生成
function renderNavbar(activePage) {
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <i class="bi bi-lightning-charge-fill text-warning"></i> UrbanKicks
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'home' ? 'active' : ''}" href="index.html">ホーム</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'list' ? 'active' : ''}" href="sneaker-list.html">コレクション</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'guide' ? 'active' : ''}" href="care-guide.html">ケアガイド</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'faq' ? 'active' : ''}" href="sneaker-faq.html">FAQ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'log' ? 'active' : ''}" href="coordinate-log.html">スタイルログ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'contact' ? 'active' : ''}" href="contact.html">お問い合わせ</a>
                    </li>
                </ul>
                <div class="d-flex align-items-center gap-2">
                     <a href="login.html" class="btn btn-sm btn-outline-light ${activePage === 'login' ? 'active' : ''}">ログイン</a>
                     <a href="register.html" class="btn btn-sm btn-primary ${activePage === 'register' ? 'active' : ''}">新規登録</a>
                    <a href="wish-list.html" class="btn btn-sm btn-outline-danger rounded-pill fw-bold ms-2">
                        <i class="bi bi-heart"></i> 欲しいもの
                    </a>
                </div>
            </div>
        </div>
    </nav>
    `;
    document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
}

// 共通Footerの生成
function renderFooter() {
    const footerHTML = `
    <footer class="bg-dark text-white pt-5 pb-3 mt-auto" style="border-radius: 50px 50px 0 0;">
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-4">
                    <h5 class="fw-bold mb-3">
                        <i class="bi bi-lightning-charge-fill text-warning"></i> UrbanKicks
                    </h5>
                    <p class="text-secondary">スニーカーカルチャーのすべてがここに。<br>最新ニュース、ケア方法、コミュニティスタイル。</p>
                </div>
                <div class="col-md-2 mb-4">
                    <h6 class="fw-bold mb-3 text-light">サイト情報</h6>
                    <ul class="list-unstyled">
                        <li><a href="index.html" class="text-secondary text-decoration-none hover-white">ホーム</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none hover-white">利用規約</a></li>
                        <li><a href="#" class="text-secondary text-decoration-none hover-white">プライバシー</a></li>
                    </ul>
                </div>
                <div class="col-md-2 mb-4">
                    <h6 class="fw-bold mb-3 text-light">サポート</h6>
                    <ul class="list-unstyled">
                        <li><a href="sneaker-faq.html" class="text-secondary text-decoration-none hover-white">ヘルプ</a></li>
                        <li><a href="contact.html" class="text-secondary text-decoration-none hover-white">お問い合わせ</a></li>
                        <li><a href="sneaker-faq.html" class="text-secondary text-decoration-none hover-white">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-md-4 mb-4">
                    <h6 class="fw-bold mb-3 text-light">フォローする</h6>
                    <div class="d-flex gap-3">
                        <a href="#" class="text-secondary fs-4 hover-white"><i class="bi bi-twitter"></i></a>
                        <a href="#" class="text-secondary fs-4 hover-white"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="text-secondary fs-4 hover-white"><i class="bi bi-youtube"></i></a>
                        <a href="#" class="text-secondary fs-4 hover-white"><i class="bi bi-facebook"></i></a>
                    </div>
                </div>
            </div>
            <hr class="border-secondary">
            <p class="text-center mb-0 text-secondary">&copy; 2026 UrbanKicks. All rights reserved.</p>
        </div>
    </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}
