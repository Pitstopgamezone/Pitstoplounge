use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index', ['title' => 'Pit Stop Lounge']);
});

Route::get('/service', function () {
    return view('service');
});

Route::get('/token', function () {
    return view('token');
});

Route::get('/club', function () {
    return view('club');
});
