<?php

namespace App\Http\Controllers;

use App\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    public function showAll()
    {
        $categories = Category::all();
        return response()->json($categories);
    }



    public function store(Request $request)
    {
        $cat = new Category;
        $cat->name = $request->category_name;
        $cat->save();
        if($cat->id){
            return response()->json(['result'=>true]);
        }
        return response()->json(['result'=>false]);
    }


    public function show(Category $category)
    {
        //
    }



    public function update(Request $request, Category $category)
    {
        //
    }


    public function destroy(Category $category)
    {
        //
    }
}
