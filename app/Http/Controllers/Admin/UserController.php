<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class UserController extends Controller
{
  /**
   * Display a listing of users.
   */
  public function index()
  {
    $users = User::where('is_admin', false)->latest()->paginate(10);
    return view('admin.users.index', compact('users'));
  }

  /**
   * Export users to Excel.
   */
  public function export()
  {
    $users = User::where('is_admin', false)->get();

    $spreadsheet = new Spreadsheet();
    $sheet = $spreadsheet->getActiveSheet();

    // Set headers
    $sheet->setCellValue('A1', 'ID');
    $sheet->setCellValue('B1', 'Name');
    $sheet->setCellValue('C1', 'Email');
    $sheet->setCellValue('D1', 'Mobile');
    $sheet->setCellValue('E1', 'Registered Date');

    // Style the header row
    $sheet->getStyle('A1:E1')->getFont()->setBold(true);

    // Populate data
    $row = 2;
    foreach ($users as $user) {
      $sheet->setCellValue('A' . $row, $user->id);
      $sheet->setCellValue('B' . $row, $user->name);
      $sheet->setCellValue('C' . $row, $user->email);
      $sheet->setCellValue('D' . $row, $user->mobile);
      $sheet->setCellValue('E' . $row, $user->created_at->format('Y-m-d H:i:s'));
      $row++;
    }

    // Auto size columns
    foreach (range('A', 'E') as $column) {
      $sheet->getColumnDimension($column)->setAutoSize(true);
    }

    // Create a temporary file
    $fileName = 'users_' . date('Y-m-d_H-i-s') . '.xlsx';
    $tempFile = tempnam(sys_get_temp_dir(), $fileName);

    $writer = new Xlsx($spreadsheet);
    $writer->save($tempFile);

    // Return the file as a download
    return Response::download($tempFile, $fileName, [
      'Content-Type' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    ])->deleteFileAfterSend(true);
  }
}
