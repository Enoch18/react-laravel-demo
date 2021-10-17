<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Resources\DayPlannersResource;

use App\Models\Day;
use App\Models\Activity;

use App\Http\Requests\DayRequest;

class DayPlannersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DayPlannersResource::collection(Day::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(DayRequest $request)
    {
        $this->storeAfterCheck($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $day = Day::find($id);

        return new DayPlannersResource($day);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(DayRequest $request, $id)
    {
        $activity = Activity::find($id);
        $activity->time = $request->time;
        $activity->activity = $request->activity;
        $activity->save();

        return response()->json(['message' => 'Successfully Updated.']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $day_id = Activity::where('id', '=', $id)->first()->day_id;
        if (Activity::where('day_id', '=', $day_id)->count() > 1){
            $activity = Activity::find($id)->delete();
        }else{
            $day_id = Activity::find($id)->day_id;
            Activity::find($id)->delete();
            Day::find($day_id)->delete();
        }

        return response()->json(['message' => 'Successfully Deleted.']);
    }

    public function storeAfterCheck($request){
        if (Day::where('date', '=', $request->date)->count() == 0){
            $day = new Day;
            $day->date = $request->date;
            $day->save();

            $activity = new Activity;
            $activity->day_id = $day->id;
            $activity->time = $request->time;
            $activity->activity = $request->activity;
            $activity->save();

            return response()->json(['message' => 'Successfully Saved.']);
        }

        if (Day::where('date', '=', $request->date)->count() > 0){
            $day_id = Day::where('date', '=', $request->date)->first()->id;

            $activity = new Activity;
            $activity->day_id = $day_id;
            $activity->time = $request->time;
            $activity->activity = $request->activity;
            $activity->save();

            return response()->json(['message' => 'Successfully Saved.']);
        }
    }
}
