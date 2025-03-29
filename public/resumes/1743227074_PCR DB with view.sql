use PCR_data;
show tables;

CREATE TABLE `tb_org_mappings` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `reporting_id` bigint NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` bigint DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `updated_by` bigint DEFAULT NULL,
  `deactivated_at` timestamp NULL DEFAULT NULL,
  `deactivated_by` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



select * from tb_org_mappings;

INSERT INTO pcr_data.tb_org_mappings (user_id, reporting_id, created_at, created_by, updated_at, 
updated_by, deactivated_at, deactivated_by) VALUES
   (10015,10014,'2023-12-15 23:40:39',1,NULL,NULL,NULL,NULL),
   (10002,10003,'2023-12-16 00:00:44',1,NULL,NULL,NULL,NULL),
   (10012,10014,'2024-02-01 00:00:44',1,NULL,NULL,NULL,NULL),
   (100030,100031,'2024-02-01 18:00:44',1,NULL,NULL,NULL,NULL),
   (10021,10003,'2023-12-16 00:00:44',1,NULL,NULL,NULL,NULL),
   (10008,10011,'2024-03-14 19:07:50',1,NULL,NULL,NULL,NULL),
   (9999,10000,'2023-12-16 00:00:44',1,NULL,NULL,NULL,NULL),
   (9998,10000,'2023-12-16 00:00:44',1,NULL,NULL,NULL,NULL),
   (9997,9996,'2023-12-16 00:00:44',1,NULL,NULL,NULL,NULL),
   (10013,10014,'2023-12-16 00:00:44',1,NULL,NULL,NULL,NULL);

INSERT INTO pcr_data.tb_org_mappings (user_id,reporting_id,created_at,created_by,updated_at,
updated_by,deactivated_at,deactivated_by) VALUES
   (10015,10014,'2023-12-15 23:40:39',1,NULL,NULL,NULL,NULL),
   (10002,10003,'2023-12-16 00:00:44',1,NULL,NULL,NULL,NULL),
   (10012,10014,'2024-02-01 00:00:44',1,NULL,NULL,NULL,NULL),
   (100030,100031,'2024-02-01 18:00:44',1,NULL,NULL,NULL,NULL),
   (10021,10003,'2023-12-16 00:00:44',1,NULL,NULL,NULL,NULL),
   (10008,10011,'2024-03-14 19:07:50',1,NULL,NULL,NULL,NULL),
   (9999,10000,'2023-12-16 00:00:44',1,NULL,NULL,NULL,NULL),
   (9998,10000,'2023-12-16 00:00:44',1,NULL,NULL,NULL,NULL),
   (9997,9996,'2023-12-16 00:00:44',1,NULL,NULL,NULL,NULL),
   (10013,10014,'2023-12-16 00:00:44',1,NULL,NULL,NULL,NULL);
   
INSERT INTO pcr_data.tb_org_mappings (user_id,reporting_id,created_at,
created_by,updated_at,updated_by,deactivated_at,deactivated_by) VALUES
   (100032,10011,'2023-12-15 23:40:39',1,NULL,NULL,NULL,NULL),
   (100033,10011,'2023-12-15 23:40:39',1,NULL,NULL,NULL,NULL),
   (100036,10011,'2023-12-15 23:40:39',0,NULL,NULL,NULL,NULL),
   (100034,10017,'2023-12-15 23:40:39',1,NULL,NULL,NULL,NULL),
   (100037,10017,'2023-12-15 23:40:39',1,NULL,NULL,NULL,NULL),
   (100038,10017,'2023-12-15 23:40:39',1,NULL,NULL,NULL,NULL),
   (100035,10019,'2023-12-15 23:40:39',1,NULL,NULL,NULL,NULL),
   (100039,10019,'2023-12-15 23:40:39',1,NULL,NULL,NULL,NULL),
   (100040,10017,'2023-12-15 23:40:39',1,NULL,NULL,NULL,NULL),
   (10037,10020,'2024-10-07 16:27:04',1,NULL,NULL,NULL,NULL);
   
INSERT INTO pcr_data.tb_org_mappings (user_id,reporting_id,created_at,
created_by,updated_at,updated_by,deactivated_at,deactivated_by) VALUES
   (100094,10011,'2024-11-19 19:31:50',1,NULL,NULL,NULL,NULL),
   (9996,9996,'2024-11-27 23:40:39',1,NULL,NULL,NULL,NULL),
   (10000,10000,'2024-11-27 23:40:39',1,NULL,NULL,NULL,NULL),
   (10003,10003,'2024-11-27 23:40:39',1,NULL,NULL,NULL,NULL),
   (10011,10011,'2024-11-27 23:40:39',1,NULL,NULL,NULL,NULL),
   (10014,10014,'2024-11-27 23:40:39',1,NULL,NULL,NULL,NULL),
   (10017,10017,'2024-11-27 23:40:39',1,NULL,NULL,NULL,NULL),
   (10019,10019,'2024-11-27 23:40:39',1,NULL,NULL,NULL,NULL),
   (10020,10020,'2024-11-27 23:40:39',1,NULL,NULL,NULL,NULL),
   (100095,10014,'2024-12-31 13:04:39',1,NULL,NULL,NULL,NULL);
   
   
   --------------------------------
   
   SELECT
    reporting_id AS RTM_id,
    COUNT(user_id) AS tm_count
FROM
    tb_org_mappings
GROUP BY
    reporting_id
ORDER BY
    tm_count DESC;

use pcr_data;
    ------------------------------------
select * from tb_org_mappings;
select * from pcr_failed_parts;
select * from tb_ticket_masters;
select * from tb_chat_feedbacks;
select * from tb_dealer_masters;
select * from tb_dtc_codes;
select * from tb_ticket_closure_analyses;
select * from tb_ticket_childs;
select * from tb_ticket_dtc_codes;
select * from tb_users;



select * from tb_ticket_masters where
status = 'Cancelled';

------------------------------------------

-- Views

create view fact_ticket_masters_view as
select ticket_no, dealer_code, model_line, pcr_type, created_at
from tb_ticket_masters;


select * from fact_ticket_masters_view;

create view dim_dealer_masters_view as
select outlet_code, zone, region
from tb_dealer_masters;

select * from dim_dealer_masters_view;

CREATE OR REPLACE VIEW dim_users_view as
select id, first_name, last_name, email_original, dealer_codes, is_active, designation
from tb_users; 

select * from dim_users_view;


-----------------------------

-- daily reports count

SELECT 
    date(created_at) AS day, 
    COUNT(*) AS records 
FROM 
    pcr_failed_parts 
GROUP BY 
    day 
ORDER BY 
    day DESC;
    
    
    --------------------------------
    
    SELECT 
    DATE(created_at) AS day, 
    COUNT(*) AS records 
FROM 
    tb_ticket_masters
GROUP BY 
    day 
ORDER BY 
    day DESC;
    

------------------------------------------------

-- no of columns

SELECT COUNT(*) 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'pcr_failed_parts' 
AND TABLE_SCHEMA = 'pcr_data';


SELECT COUNT(*) 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'tb_chat_feedbacks' 
AND TABLE_SCHEMA = 'pcr_data';

SELECT COUNT(*) 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'tb_dealer_masters' 
AND TABLE_SCHEMA = 'pcr_data';

SELECT COUNT(*) 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'tb_dtc_codes' 
AND TABLE_SCHEMA = 'pcr_data';

SELECT COUNT(*) 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'tb_ticket_childs' 
AND TABLE_SCHEMA = 'pcr_data';

SELECT COUNT(*) 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'tb_ticket_closure_analyses' 
AND TABLE_SCHEMA = 'pcr_data';

SELECT COUNT(*) 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'tb_ticket_dtc_codes' 
AND TABLE_SCHEMA = 'pcr_data';



SELECT COUNT(*) 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'tb_ticket_masters' 
AND TABLE_SCHEMA = 'pcr_data';

SELECT COUNT(*) 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'tb_ticket_ratings' 
AND TABLE_SCHEMA = 'pcr_data';

SELECT COUNT(*) 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'tb_users' 
AND TABLE_SCHEMA = 'pcr_data';

SELECT COUNT(*) 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'tb_org_mappings' 
AND TABLE_SCHEMA = 'pcr_data';

--- count rows

select COUNT(*) as row_count from tb_org_mappings;
select COUNT(*) as row_count from pcr_failed_parts;
select COUNT(*) as row_count from tb_chat_feedbacks;
select COUNT(*) as row_count from tb_dealer_masters;
select COUNT(*) as row_count from tb_dtc_codes;
select COUNT(*) as row_count from tb_ticket_childs;
select COUNT(*) as row_count from tb_ticket_closure_analyses;
select COUNT(*) as row_count from tb_ticket_dtc_codes;
select COUNT(*) as row_count from tb_ticket_masters;
select COUNT(*) as row_count from tb_ticket_ratings;
select COUNT(*) as row_count from tb_users;


-----------------------------------------

SELECT 
    TABLE_NAME AS TableName,
    ROUND((DATA_LENGTH + INDEX_LENGTH) / (1024 * 1024), 2) AS TableSizeMB
FROM 
    INFORMATION_SCHEMA.TABLES
WHERE 
    TABLE_SCHEMA = DATABASE()
ORDER BY 
    TableSizeMB DESC;
    
    -----------------------------------
    
    SELECT 
    TABLE_NAME AS TableName,
    ROUND((DATA_LENGTH + INDEX_LENGTH) / (1024 * 1024), 2) AS TableSizeMB
FROM 
    INFORMATION_SCHEMA.TABLES
WHERE 
    TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'tb_chat_feedbacks';
    
    --------------------------
    
    SELECT 
    TABLE_NAME AS TableName,
    ROUND((DATA_LENGTH + INDEX_LENGTH) / (1024 * 1024), 2) AS TableSizeMB
FROM 
    INFORMATION_SCHEMA.TABLES
WHERE 
    TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'tb_org_mappings';
    
    
    ----------------------------------------
    
    SELECT 
    TABLE_NAME AS TableName,
    ROUND((DATA_LENGTH + INDEX_LENGTH) / (1024 * 1024), 2) AS TableSizeMB
FROM 
    INFORMATION_SCHEMA.TABLES
WHERE 
    TABLE_SCHEMA = DATABASE()
    AND TABLE_NAME = 'tb_ticket_childs';
    
    -- Total Informatory Cases
    
    select dm.zone, dm.region, tm.dealer_code, tm.model_line,
    count(tm.ticket_no) as total_cases from tb_dealer_masters dm
    join tb_ticket_masters tm on tm.dealer_code = dm.outlet_code
     where tm.pcr_type = 'Informatory'
     group by dm.zone, dm.region, tm.dealer_code, tm.model_line; 
     
     
     -- Total Assistance Cases
     
      select dm.zone, dm.region, dm.outlet_code, tm.model_line,
    count(tm.ticket_no) as total_cases from tb_dealer_masters dm
    join tb_ticket_masters tm on tm.dealer_code = dm.outlet_code
     where tm.pcr_type = 'MGI Assistance'
     group by dm.zone, dm.region, dm.outlet_code, tm.model_line; 
     
     
     
     
     -----------------------------
     
    
    
    ---------------------
    --- ticket count by PCR Type
    
    SELECT 
    tm.pcr_type, 
    COUNT(tm.ticket_no) AS ticket_count
FROM 
    tb_ticket_masters tm
GROUP BY 
    tm.pcr_type; 
    
    
    
    
    
     --------------------
     ALTER TABLE tb_ticket_masters 
    modify created_at DATE; 

DESC tb_ticket_masters;


     --------------------------------
     
     --- Count duplicates
     
     SELECT outlet_code, COUNT(*) AS duplicate_count
FROM tb_dealer_masters
GROUP BY outlet_code
HAVING COUNT(*) > 1;



 SELECT dealer_code, COUNT(*) AS duplicate_count
FROM tb_ticket_masters
GROUP BY dealer_code
HAVING COUNT(*) > 1;


SELECT model_line, COUNT(*) AS duplicate_count
FROM tb_ticket_masters
GROUP BY model_line
HAVING COUNT(*) > 1;

---------------------------------


SELECT
    om.reporting_id AS RTM_id,
    om.user_id AS TM_id,
    tm.pcr_type,
    COUNT(tm.ticket_no) AS ticket_count
FROM
    tb_ticket_masters tm
JOIN
    tb_org_mappings om
    ON tm.tm_rtm_id = om.user_id  
GROUP BY
    om.reporting_id,
    om.user_id,
    tm.pcr_type
ORDER BY
    om.reporting_id,
    om.user_id,
    tm.pcr_type;
    
    ---------------------
    --- Total tickets by TM and RTM
    
    SELECT
    om.reporting_id AS RTM_id,
    om.user_id AS TM_id,
    tm.pcr_type,
    COUNT(tm.ticket_no) AS ticket_count
FROM
    tb_ticket_masters tm
JOIN
    tb_org_mappings om
    ON tm.tm_rtm_id = om.user_id  
WHERE
    tm.pcr_type IN ('MGI assistance', 'Informatory')  
GROUP BY
    om.reporting_id,
    om.user_id,
    tm.pcr_type
ORDER BY
    om.reporting_id,
    om.user_id,
    tm.pcr_type;



-----------------------------------


SELECT 
    dm.zone, 
    dm.region, 
    dm.outlet_code, 
    tm.model_line,
    om.user_id AS TM_id,        
    om.reporting_id AS RTM_id, 
    COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END) AS total_informatory_cases,
    COUNT(CASE WHEN tm.pcr_type = 'MGI Assistance' THEN tm.ticket_no END) AS total_assistance_cases,
    ROUND(CAST(
        COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END) AS FLOAT
    ) / NULLIF(
        COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END) + 
        COUNT(CASE WHEN tm.pcr_type = 'MGI Assistance' THEN tm.ticket_no END),
        0
    ) * 100,1) AS reliance_score,

    DATE_FORMAT(tm.created_at, '%b-%Y') AS month
FROM 
    tb_dealer_masters dm
JOIN 
    tb_ticket_masters tm 
    ON tm.dealer_code = dm.outlet_code
JOIN
    tb_org_mappings om
    ON tm.tm_rtm_id = om.user_id 
GROUP BY 
    dm.zone, 
    dm.region, 
    dm.outlet_code, 
    tm.model_line,
    om.user_id,       
    om.reporting_id,  
    
    DATE_FORMAT(tm.created_at, '%b-%Y')
ORDER BY
    dm.zone, dm.region, dm.outlet_code, tm.model_line, om.reporting_id, om.user_id;

use pcr_data;
-- Warranty Intervention % by Zone

SELECT 
    d.Zone,
    COUNT(CASE WHEN t.PCR_Type = 'MGI Assistance' THEN t.Ticket_No END) AS MGI_Assistance,
    COUNT(CASE WHEN t.PCR_Type = 'Informatory' THEN t.Ticket_No END) AS Informatory,
    COUNT(CASE WHEN t.PCR_Type IN ('MGI Assistance', 'Informatory') THEN t.Ticket_No END) AS Total_Cases,
    IFNULL(
        COUNT(CASE WHEN t.PCR_Type = 'MGI Assistance' THEN t.Ticket_No END) / 
        NULLIF(COUNT(CASE WHEN t.PCR_Type IN ('MGI Assistance', 'Informatory') THEN t.Ticket_No END), 0), 
        0
    ) * 100 AS Warranty_Intervention_Percentage
FROM tb_Ticket_Masters t
JOIN tb_dealer_masters d ON t.Dealer_code = d.outlet_code
GROUP BY d.Zone;

-----------
select * from tb_ticket_masters;

SELECT 
    d.Zone,
    COUNT(CASE WHEN t.PCR_Type = 'MGI Assistance' THEN t.Ticket_No END) AS MGI_Assistance,
    COUNT(CASE WHEN t.PCR_Type = 'Informatory' THEN t.Ticket_No END) AS Informatory,
    COUNT(CASE WHEN t.PCR_Type IN ('MGI Assistance', 'Informatory') THEN t.Ticket_No END) AS Total_Cases,
    IFNULL(
        COUNT(CASE WHEN t.PCR_Type = 'MGI Assistance' THEN t.Ticket_No END) / 
        NULLIF(COUNT(CASE WHEN t.PCR_Type IN ('MGI Assistance', 'Informatory') THEN t.Ticket_No END), 0), 
        0
    ) * 100 AS Warranty_Intervention_Percentage
FROM tb_Ticket_Masters t
JOIN tb_dealer_masters d ON t.Dealer_code = d.outlet_code
where year(t.created_at) = '2025'
GROUP BY d.Zone;

-- Warranty Intervention % by Region

SELECT 
    d.Region,
    COUNT(CASE WHEN t.PCR_Type = 'MGI Assistance' THEN t.Ticket_No END) AS MGI_Assistance,
    COUNT(CASE WHEN t.PCR_Type = 'Informatory' THEN t.Ticket_No END) AS Informatory,
    COUNT(CASE WHEN t.PCR_Type IN ('MGI Assistance', 'Informatory') THEN t.Ticket_No END) AS Total_Cases,
    IFNULL(
        COUNT(CASE WHEN t.PCR_Type = 'MGI Assistance' THEN t.Ticket_No END) / 
        NULLIF(COUNT(CASE WHEN t.PCR_Type IN ('MGI Assistance', 'Informatory') THEN t.Ticket_No END), 0), 
        0
    ) * 100 AS Warranty_Intervention_Percentage
FROM tb_Ticket_Masters t
JOIN tb_dealer_masters d ON t.Dealer_code = d.outlet_code
GROUP BY d.Region;


-- Warranty Intervention % by Model

SELECT 
    t.model_line,
    COUNT(CASE WHEN t.PCR_Type = 'MGI Assistance' THEN t.Ticket_No END) AS MGI_Assistance,
    COUNT(CASE WHEN t.PCR_Type = 'Informatory' THEN t.Ticket_No END) AS Informatory,
    COUNT(CASE WHEN t.PCR_Type IN ('MGI Assistance', 'Informatory') THEN t.Ticket_No END) AS Total_Cases,
    IFNULL(
        COUNT(CASE WHEN t.PCR_Type = 'MGI Assistance' THEN t.Ticket_No END) / 
        NULLIF(COUNT(CASE WHEN t.PCR_Type IN ('MGI Assistance', 'Informatory') THEN t.Ticket_No END), 0), 
        0
    ) * 100 AS Warranty_Intervention_Percentage
FROM tb_Ticket_Masters t
where year(created_at) = '2024'
GROUP BY t.Model_line;

-- Self Reliance Score by Zone, Region and model

SELECT 
    dm.zone, 
    dm.region, 
    tm.dealer_code,
    tm.model_line,
    COUNT(CASE WHEN tm.pcr_type = 'MGI Assistance' THEN tm.ticket_no END) AS total_mgi_assistance_cases,
    COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END) AS total_informatory_cases,
    
    ROUND(
        CAST(COALESCE(COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END), 0) AS FLOAT) / 
        NULLIF(
            COALESCE(COUNT(CASE WHEN tm.pcr_type = 'MGI Assistance' THEN tm.ticket_no END), 0) + 
            COALESCE(COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END), 0), 
            0  -- NULLIF ensures we never divide by zero
        ) * 100, 1
    ) AS self_resilience_score
FROM tb_dealer_masters dm 
JOIN tb_ticket_masters tm 
    ON dm.outlet_code = tm.dealer_code
GROUP BY dm.zone, dm.region, tm.dealer_code, tm.model_line;

-- Self Reliance Score by Zone

SELECT 
    dm.zone, 
    COUNT(CASE WHEN tm.pcr_type = 'MGI Assistance' THEN tm.ticket_no END) AS total_mgi_assistance_cases,
    COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END) AS total_informatory_cases,
    -- Corrected self resilience score calculation
    ROUND(
        CAST(COALESCE(COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END), 0) AS FLOAT) / 
        NULLIF(
            COALESCE(COUNT(CASE WHEN tm.pcr_type = 'MGI Assistance' THEN tm.ticket_no END), 0) + 
            COALESCE(COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END), 0), 
            0  -- NULLIF ensures we never divide by zero
        ) * 100, 1
    ) AS self_resilience_score
FROM tb_dealer_masters dm 
JOIN tb_ticket_masters tm 
    ON dm.outlet_code = tm.dealer_code
GROUP BY dm.zone ;
----
-- SR Score by Zone for 2024

SELECT 
    dm.zone, 
    COUNT(CASE WHEN tm.pcr_type = 'MGI Assistance' THEN tm.ticket_no END) AS total_mgi_assistance_cases,
    COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END) AS total_informatory_cases,
    -- Corrected self resilience score calculation
    ROUND(
        CAST(COALESCE(COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END), 0) AS FLOAT) / 
        NULLIF(
            COALESCE(COUNT(CASE WHEN tm.pcr_type = 'MGI Assistance' THEN tm.ticket_no END), 0) + 
            COALESCE(COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END), 0), 
            0  -- NULLIF ensures we never divide by zero
        ) * 100, 1
    ) AS self_resilience_score
FROM tb_dealer_masters dm 
JOIN tb_ticket_masters tm 
    ON dm.outlet_code = tm.dealer_code
   where year(tm.created_at) = '2024' and month(tm.created_at) = 12
GROUP BY dm.zone ;



-- -- Self Reliance Score by Zone and Region

SELECT 
    dm.zone, 
    dm.region, 
  
    COUNT(CASE WHEN tm.pcr_type = 'MGI Assistance' THEN tm.ticket_no END) AS total_mgi_assistance_cases,
    COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END) AS total_informatory_cases,
    -- Calculating the self resilience score with handling for null and rounding to 1 decimal place
    ROUND(
        CAST(COALESCE(COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END), 0) AS FLOAT) / 
        (COALESCE(COUNT(CASE WHEN tm.pcr_type = 'MGI Assistance' THEN tm.ticket_no END), 0) + 
         COALESCE(COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END), 0)),
        1
    ) * 100 AS self_resilience_score
FROM tb_dealer_masters dm 
JOIN tb_ticket_masters tm 
    ON dm.outlet_code = tm.dealer_code
GROUP BY dm.zone, dm.region ;


-- -- Self Reliance Score by Model

SELECT 
    tm.model_line,
  
    COUNT(CASE WHEN tm.pcr_type = 'MGI Assistance' THEN tm.ticket_no END) AS total_mgi_assistance_cases,
    COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END) AS total_informatory_cases,
    -- Calculating the self resilience score with handling for null and rounding to 1 decimal place
    ROUND(
        CAST(COALESCE(COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END), 0) AS FLOAT) / 
        (COALESCE(COUNT(CASE WHEN tm.pcr_type = 'MGI Assistance' THEN tm.ticket_no END), 0) + 
         COALESCE(COUNT(CASE WHEN tm.pcr_type = 'Informatory' THEN tm.ticket_no END), 0)),
        1
    ) * 100 AS self_resilience_score
FROM  tb_ticket_masters tm 
GROUP BY tm.model_line ;


------------------------------------------------------------------



create view active_tb_users as
select * from tb_users
where designation in ('Technical Manager', 'Regional technical manager') and is_active = 1 ;





----------------

SELECT 
    u.id AS user_id, 
    TRIM(SUBSTRING_INDEX(SUBSTRING_INDEX(u.dealer_codes, ',', n.n), ',', -1)) AS dealer_code,
    u.first_name, 
    u.last_name, 
    u.email, 
    u.email_original, 
    u.is_active, 
    u.designation, 
    u.created_at, 
    u.updated_at
FROM tb_users u
JOIN (
    SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4
    UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8
    UNION ALL SELECT 9 UNION ALL SELECT 10  -- Add as many numbers as the max number of commas you expect
) n
ON CHAR_LENGTH(u.dealer_codes) -CHAR_LENGTH(REPLACE(u.dealer_codes, ',', '')) >= n.n - 1
WHERE TRIM(SUBSTRING_INDEX(SUBSTRING_INDEX(u.dealer_codes, ',', n.n), ',', -1)) <> ''
ORDER BY u.id, n.n;



-------------------

SELECT 
    u.id AS user_id, 
    TRIM(REPLACE(REPLACE(SUBSTRING_INDEX(SUBSTRING_INDEX(u.dealer_codes, ',', n.n), ',', -1), '"', ''), '[]', '')) AS dealer_code,
    u.first_name, 
    u.last_name, 
    u.email, 
    u.email_original, 
    u.is_active, 
    u.designation, 
    u.created_at, 
    u.updated_at
FROM tb_users u
JOIN (
    SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4
    UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8
    UNION ALL SELECT 9 UNION ALL SELECT 10  -- Add as many numbers as the max number of commas you expect
) n
ON CHAR_LENGTH(u.dealer_codes) - CHAR_LENGTH(REPLACE(u.dealer_codes, ',', '')) >= n.n - 1
WHERE TRIM(REPLACE(REPLACE(SUBSTRING_INDEX(SUBSTRING_INDEX(u.dealer_codes, ',', n.n), ',', -1), '"', ''), '[]', '')) <> ''
ORDER BY u.id, n.n;


select * from tb_users;


create view new_tb_users as
SELECT 
    u.id AS user_id, 
    TRIM(REPLACE(REPLACE(SUBSTRING_INDEX(SUBSTRING_INDEX(u.dealer_codes, ',', n.n), ',', -1), '"', ''), '[', '')) AS dealer_code,
    u.first_name, 
    u.last_name, 
    u.email, 
    u.email_original, 
    u.is_active, 
    u.designation, 
    u.created_at, 
    u.updated_at
FROM tb_users u
JOIN (
    SELECT 1 AS n UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4
    UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8
    UNION ALL SELECT 9 UNION ALL SELECT 10  -- Add as many numbers as the max number of commas you expect
) n
ON CHAR_LENGTH(u.dealer_codes) - CHAR_LENGTH(REPLACE(u.dealer_codes, ',', '')) >= n.n - 1
WHERE TRIM(REPLACE(REPLACE(SUBSTRING_INDEX(SUBSTRING_INDEX(u.dealer_codes, ',', n.n), ',', -1), '"', ''), '[', '')) <> ''
ORDER BY u.id, n.n;


select * from new_tb_users;
select * from tb_users;


SET SQL_SAFE_UPDATES = 0;


DROP VIEW IF EXISTS new_tb_users;

UPDATE tb_users
SET dealer_codes = REPLACE(REPLACE(REPLACE(dealer_codes, '[', ''), ']', ''), '[]', '')
WHERE dealer_codes LIKE '[%' 
  AND dealer_codes LIKE '%[]%' 
  AND dealer_codes LIKE '%]';
  
  ROLLBACK;
  
  
  
  ---------------------------------
  
  select dm.zone, tm.pcr_type, count(tm.ticket_no) as total_cases
  from tb_dealer_masters dm 
  join  tb_ticket_masters tm 
  on dm.outlet_code = tm.dealer_code
  where tm.pcr_type in ('MGI Assistance', 'Informatory')
  group by dm.zone, tm.pcr_type ;
  
  
  ------------
  
  select dm.zone,count(tm.ticket_no) as total_cases
  from tb_dealer_masters dm 
  join  tb_ticket_masters tm 
  on dm.outlet_code = tm.dealer_code
  where tm.pcr_type in ('MGI Assistance', 'Informatory')
  group by dm.zone ;

---------------------

select pcr_type,count(ticket_no) as total_cases
  from   tb_ticket_masters 
  group by pcr_type ;
  
  -------------
  
   select dm.zone, dm.region,tm.dealer_code,
   tm.model_line,tm.pcr_type, count(tm.ticket_no) as total_cases
  from tb_dealer_masters dm 
  join  tb_ticket_masters tm 
  on dm.outlet_code = tm.dealer_code
  where tm.pcr_type in ('MGI Assistance', 'Informatory')
  group by dm.zone, dm.region,tm.dealer_code,
   tm.model_line,tm.pcr_type ;
   
   
   --------------
   select dm.zone,
   tm.model_line,tm.pcr_type, count(tm.ticket_no) as total_cases
  from tb_dealer_masters dm 
  join  tb_ticket_masters tm 
  on dm.outlet_code = tm.dealer_code
  where tm.pcr_type in ('MGI Assistance', 'Informatory')
  group by dm.zone,
   tm.model_line,tm.pcr_type ;
   
   -----------------
   
 


---------------
select * from tb_users;

select * from tb_users
where is_active = 0;

    
    
    
    
    






