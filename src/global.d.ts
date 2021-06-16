/// <reference types="@sveltejs/kit" />
type Vehicle = {

    Make: string;
    ModelYear?: string;
    Model?: string;
    Trim?: string;
    DisplacementL?: string;
    FuelTypePrimary?: string;
    Doors?: string;
    BodyClass?: string;
    PlantCity?: string;
    PlantCountry?: string;
    EngineCylinders?: string;
    EngineConfiguration?: string;
    DriveType?: string;

    [key: string]: string;
};
