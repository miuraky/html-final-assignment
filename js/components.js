// 共通Navbarの生成
function renderNavbar(activePage) {
    const navbarHTML = `
    <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <i class="bi bi-heart-fill text-danger"></i> KicksLog
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'home' ? 'active' : ''}" href="index.html">ホーム</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'list' ? 'active' : ''}" href="sneaker-list.html">コレクション</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'guide' ? 'active' : ''}" href="care-guide.html">手入れガイド</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'faq' ? 'active' : ''}" href="sneaker-faq.html">FAQ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'log' ? 'active' : ''}" href="coordinate-log.html">コーデ記録</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${activePage === 'contact' ? 'active' : ''}" href="contact.html">お問い合わせ</a>
                    </li>
                </ul>
                <a href="wish-list.html" class="btn btn-outline-danger ms-3 rounded-pill fw-bold">
                    <i class="bi bi-heart"></i> 欲しいもの
                </a>
            </div>
        </div>
    </nav>
    `;
    document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
}

// 共通Footerの生成
function renderFooter() {
    const footerHTML = `
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-md-4 mb-4">
                    <h5 class="fw-bold mb-3">
                        <i class="bi bi-heart-fill text-danger"></i> KicksLog
                    </h5>
                    <p>スニーカーライフをより楽しくする情報サイト。<br>メンテナンス、コーディネート、コレクション管理まで。</p>
                </div>
                <div class="col-md-2 mb-4">
                    <h6 class="fw-bold mb-3">サイト情報</h6>
                    <ul class="list-unstyled">
                        <li><a href="index.html" class="text-white text-decoration-none">ホーム</a></li>
                        <li><a href="#" class="text-white text-decoration-none">利用規約</a></li>
                        <li><a href="#" class="text-white text-decoration-none">プライバシー</a></li>
                    </ul>
                </div>
                <div class="col-md-2 mb-4">
                    <h6 class="fw-bold mb-3">サポート</h6>
                    <ul class="list-unstyled">
                        <li><a href="sneaker-faq.html" class="text-white text-decoration-none">ヘルプ</a></li>
                        <li><a href="contact.html" class="text-white text-decoration-none">お問い合わせ</a></li>
                        <li><a href="sneaker-faq.html" class="text-white text-decoration-none">FAQ</a></li>
                    </ul>
                </div>
                <div class="col-md-4 mb-4">
                    <h6 class="fw-bold mb-3">フォローする</h6>
                    <div class="d-flex gap-3">
                        <a href="#" class="text-white fs-4"><i class="bi bi-twitter"></i></a>
                        <a href="#" class="text-white fs-4"><i class="bi bi-instagram"></i></a>
                        <a href="#" class="text-white fs-4"><i class="bi bi-youtube"></i></a>
                        <a href="#" class="text-white fs-4"><i class="bi bi-facebook"></i></a>
                    </div>
                </div>
            </div>
            <hr class="border-light">
            <p class="text-center mb-0">&copy; 2026 KicksLog. All rights reserved.</p>
        </div>
    </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
}
