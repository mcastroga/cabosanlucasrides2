'use strict';

const { src, dest, series, parallel, watch } = require('gulp');
const pug = require('gulp-pug');
const concat = require('gulp-concat');
const stylus = require('gulp-stylus');
const browserSync = require('browser-sync').create();
const spawn = require('child_process').spawn;

// Paths for better maintainability
const paths = {
    scripts: {
        vendors: [
            "node_modules/jquery/dist/jquery.js",
            "node_modules/bootstrap/dist/js/bootstrap.js",
            "node_modules/@fortawesome/fontawesome-free/js/all.js",
            "node_modules/easy-autocomplete/dist/jquery.easy-autocomplete.js",
            "node_modules/jquery-ui/dist/jquery-ui.js",
            "node_modules/jquery-timepicker/jquery.timepicker.js",
            "node_modules/aos/dist/aos.js",
            "node_modules/moment/min/moment-with-locales.js",
            "source/libraries/owl-carousel/owlcarousel.min.js"
        ],
        main: "source/scripts/**/*.js",
        output: "./website/scripts/"
    },
    styles: {
        vendors: [
            "node_modules/bootstrap/dist/css/bootstrap.min.css",
            "node_modules/bootstrap-datetimepicker/dist/css/bootstrap-datetimepicker.min.css",
            "node_modules/easy-autocomplete/dist/easy-autocomplete.css",
            "node_modules/aos/dist/aos.css",
            "node_modules/animate.css/animate.min.css",
            "node_modules/@fortawesome/fontawesome-free/css/all.css",
            "node_modules/jquery-ui/dist/themes/base/jquery-ui.css",
            "node_modules/jquery-timepicker/jquery.timepicker.css",
            "node_modules/jquery-ui/dist/themes/base/theme.css"
        ],
        main: "source/styles/*.styl",
        output_vendors: "./website/css/",
        output_main: "./website/css/"
    },
    stylesImages: {
        main: "node_modules/jquery-ui/dist/themes/base/images/*.png",
        output: "./website/css/images/"
    },
    assets: {
        images: [
            "source/images/**/*.gif",
            "source/images/**/*.jpg",
            "source/images/**/*.png",
            "source/images/**/*.svg",
            "source/images/**/*.webp"
        ],
        json: "source/assets/json/*.json",
        php: "source/assets/php/*.php",
        fonts: "source/assets/fonts/*.*",
        webfonts: "source/libraries/fontawesome-free-6.7.2/webfonts/*.*",
        output_images: "./website/images/",
        output_json: "./website/json/",
        output_php: "./website/php/",
        output_fonts: "./website/fonts/",
        output_webfonts: "./website/webfonts/"
    },
    templates: {
        main: "source/templates/*.pug",
        output: "./website/"
    },
    internal_en_pages_blog: {
        main: "source/templates/en/blog/**/*.pug",
        output: "./website/"
    },
    internal_en_pages: {
        main: "source/templates/en/*.pug",
        output: "./website/en/"
    },
    hotel: {
        main: "source/templates/en/blog/**/*.pug",
        output: "./website/en/blog/"
    },
    qr_templates: {
        main: "source/templates/qr/*.pug",
        output: "./website/qr/"
    },
    qr_images: {
        main: [
            "source/templates/qr/images/**/*.gif",
            "source/templates/qr/images/**/*.jpg",
            "source/templates/qr/images/**/*.png",
            "source/templates/qr/images/**/*.svg",
            "source/templates/qr/images/**/*.webp"
        ],
        output: "./website/qr/images/"
    },
    qr_scripts: {
        main: "source/templates/qr/scripts/*.js",
        output: "./website/qr/"
    },

    qr_php: {
        main: "source/templates/qr/php/*.php",
        output: "./website/qr/"
    }
};

// Build tasks
function buildVendorsScripts() {
    return src(paths.scripts.vendors).pipe(concat("vendors.js")).pipe(dest(paths.scripts.output))
        .pipe(src(paths.scripts.main)).pipe(dest(paths.scripts.output));
}

function buildVendorsStyle() {
    return src(paths.styles.vendors, { allowEmpty: true }).pipe(concat("vendors.min.css")).pipe(dest(paths.styles.output_vendors));
}
function buildScripts() {
    return src(paths.scripts.main).pipe(dest(paths.scripts.output))
}

function buildStyles() {
    return src(paths.styles.main, { allowEmpty: true }).pipe(stylus({ compress: false })).pipe(dest(paths.styles.output_main));
}

function buildStylesImages() {
    return src(paths.stylesImages.main, {encoding: false}).pipe(dest(paths.stylesImages.output));
}

function copyImages() {
    return src(paths.assets.images, {encoding: false}).pipe(dest(paths.assets.output_images));
}

function copyJson() {
    return src(paths.assets.json, {encoding: false}).pipe(dest(paths.assets.output_json));
}

function copyPhp() {
    return src(paths.assets.php).pipe(dest(paths.assets.output_php));
}

function copyWebFonts() {
    return src(paths.assets.webfonts).pipe(dest(paths.assets.output_webfonts));
}

function buildTemplates() {
    return src(paths.templates.main).pipe(pug({ pretty: true })).pipe(dest(paths.templates.output));
}

function buildTemplatesENPagesBlog() {
    return src(paths.internal_en_pages_blog.main).pipe(pug({ pretty: true })).pipe(dest(paths.internal_en_pages_blog.output));
}

function buildTemplatesENPages() {
    return src(paths.internal_en_pages.main).pipe(pug({ pretty: true })).pipe(dest(paths.internal_en_pages.output));
}

function buildTemplatesHotel() {
    return src(paths.hotel.main).pipe(pug({ pretty: true })).pipe(dest(paths.hotel.output));
}

function buildQRTemplates() {
    return src(paths.qr_templates.main).pipe(pug({ pretty: true })).pipe(dest(paths.qr_templates.output));
}

function buildQRImages() {
    return src(paths.qr_images.main, {encoding: false}).pipe(dest(paths.qr_images.output));
}

function buildQRScripts() {
    return src(paths.qr_scripts.main).pipe(dest(paths.qr_scripts.output));
}

function buildQRPHP() {
    return src(paths.qr_php.main).pipe(dest(paths.qr_php.output));
}

// Browser Sync
function browserSyncServe(cb) {
    browserSync.init({
        reloadDebounce: 500,
        reloadDelay: 500,
        port: 8080,
        server: {
            baseDir: './website'
        }
    });
    cb();
}

function browserSyncReload(cb) {
    browserSync.reload();
    cb();
}

// Watch tasks
function watchFiles() {
    watch("source/**/*.{gif,jpg,png,svg}", series(copyImages, browserSyncReload));
    watch("source/templates/**/*.pug", series(buildTemplates, browserSyncReload));
    watch("source/templates/en/blog/*.pug", series(buildTemplatesENPagesBlog, browserSyncReload));
    watch("source/templates/en/*.pug", series(buildTemplatesENPages, browserSyncReload));
    watch("source/templates/en/blog/**/*.pug", series(buildTemplatesHotel, browserSyncReload));
    watch("source/styles/**/*.styl", series(buildStyles, browserSyncReload));
    watch("source/**/*.php", series(copyPhp, browserSyncReload));
    watch("source/scripts/*.js", series(buildScripts, browserSyncReload));
    watch("source/templates/qr/**/*.pug", series(buildQRTemplates, browserSyncReload));
    watch("source/templates/qr/**/images/**/*.{gif,jpg,png,svg}", series(buildQRImages, browserSyncReload));
    watch("source/templates/qr/**/scripts/**/*.js", series(buildQRScripts, browserSyncReload));
    watch("source/templates/qr/**/php/**/*.php", series(buildQRPHP, browserSyncReload));
}

// Reload task with process respawn
let process;
function reloadTask(cb) {
    watch(["Gulpfile.js", "tasks/*.js", "source/scripts/*.js", "source/assets/php/*.php"], () => {
        if (process) process.kill();
        process = spawn('gulp', { stdio: 'inherit' });
    });
    cb();
}

// Combined tasks
const build = parallel(buildScripts, buildStyles, buildStylesImages, buildVendorsScripts, buildVendorsStyle, copyImages, copyJson, copyWebFonts, copyPhp, buildTemplates, buildTemplatesENPages, buildTemplatesHotel, buildTemplatesENPagesBlog, buildQRTemplates, buildQRImages, buildQRScripts, buildQRPHP);
const serve = series(build, parallel(watchFiles, browserSyncServe));

// Export tasks
exports.build = build;
exports.serve = serve;
exports.default = serve;
