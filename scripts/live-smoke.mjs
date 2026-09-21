// Purpose: Guard the unwired paid impact provider.
if(!process.env.TYPESAFE_API_KEY)throw Error('Set TYPESAFE_API_KEY');throw Error('Live adapter not wired; zero requests made');
