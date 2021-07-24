<?php

namespace App\Http\Controllers;

use App\Monument;
use Illuminate\Http\Request;

class MonumentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Monument::all()->sortBy('name')->values();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Monument  $monument
     * @return \Illuminate\Http\Response
     */
    public function show(Monument $monument)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Monument  $monument
     * @return \Illuminate\Http\Response
     */
    public function edit(Monument $monument)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Monument  $monument
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Monument $monument)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Monument  $monument
     * @return \Illuminate\Http\Response
     */
    public function destroy(Monument $monument)
    {
        //
    }
}
