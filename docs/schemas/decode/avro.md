# Avro

```json
{
  "type": "record",
  "name": "test",
  "fields": [
    {
      "name": "decimal_fixed",
      "type": {
        "type": "fixed",
        "size": 2,
        "name": "decimal"
      },
      "logicalType": "decimal",
      "precision": 4,
      "scale": 2
    },
    {
      "name": "decimal_var",
      "type": "bytes",
      "logicalType": "decimal",
      "precision": 10,
      "scale": 3
    },
    {
      "name": "uuid",
      "type": "string",
      "logicalType": "uuid"
    },
    {
      "name": "date",
      "type": "int",
      "logicalType": "date"
    },
    {
      "name": "time_millis",
      "type": "int",
      "logicalType": "time-millis"
    },
    {
      "name": "time_micros",
      "type": "long",
      "logicalType": "time-micros"
    },
    {
      "name": "timestamp_millis",
      "type": "long",
      "logicalType": "timestamp-millis"
    },
    {
      "name": "timestamp_micros",
      "type": "long",
      "logicalType": "timestamp-micros"
    },
    {
      "name": "local_timestamp_millis",
      "type": "long",
      "logicalType": "local-timestamp-millis"
    },
    {
      "name": "local_timestamp_micros",
      "type": "long",
      "logicalType": "local-timestamp-micros"
    },
    {
      "name": "duration",
      "type": {
        "type": "fixed",
        "size": 12,
        "name": "duration"
      },
      "logicalType": "duration"
    }
  ]
}
```