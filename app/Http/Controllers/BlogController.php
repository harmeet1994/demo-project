<?php

namespace App\Http\Controllers;

use DB;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public function getBlogs(Request $request)
    {
        $blogs = DB::table('wp_blogs')
            ->selectRaw("wp_blogs.*,DATE_FORMAT(Blog_publish_date,'%M %d, %Y') as publish_date")
            ->take(3)
            ->get();

        return response()->json(['data' => $blogs]);
    }

    public function getBlogsFull(Request $request)
    {
        if ($request->type && $request->type != 'All') {
            $blogs = DB::table('wp_blogs')
                ->where('BlogType', '=', $request->type)
                ->selectRaw("wp_blogs.*,DATE_FORMAT(Blog_publish_date,'%M %d, %Y') as publish_date")
                ->orderByDesc('id')
                ->paginate(10);
        } else {
            $blogs = DB::table('wp_blogs')
                ->selectRaw("wp_blogs.*,DATE_FORMAT(Blog_publish_date,'%M %d, %Y') as publish_date")
                ->orderByDesc('id')
                ->paginate(10);
        }

        $categories = DB::table('wp_blogs')
            ->groupBy('BlogType')
            ->pluck('BlogType');

        return response()->json(['data' => $blogs, 'categories' => $categories]);
    }
}
