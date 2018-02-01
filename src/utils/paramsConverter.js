export const logParams = values => ({
  dive_style: values['diveStyle'],
  dive_count: values['diveCount'],
  date: values['date'].format('YYYY-MM-DD'),
  entry_time: values['entryTime'].format('HH:mm'),
  location: values['location'],
  spot: values['spot'],
  entry_style: values['entryStyle'],
  max_depth: values['maxDepth'],
  duration: values['duration'],
  note: values['note'],
  tank_material: values['tankMaterial'],
  tank_capacity: values['capacity'],
  air_starting: values['starting'],
  air_ending: values['ending'],
  suit_type: values['suitType'],
  suit_thickness: values['suitThickness'],
  weight: values['weight'],
  weather: values['weather'],
  temperature: values['temperature'],
  water_temperature: values['waterTemperature'],
  wave: values['wave'],
  visibility: values['visibility'],
  guide: values['guide'],
  buddy: values['buddy'],
  publication: values['publication'],
})
