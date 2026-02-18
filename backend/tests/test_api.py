"""
Backend API Tests for Allo PC Dépannage
Tests all API endpoints including health, locations, services, and contact form
"""
import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestHealthEndpoint:
    """Health check endpoint tests"""
    
    def test_health_check(self):
        """Test /api/health returns healthy status"""
        response = requests.get(f"{BASE_URL}/api/health")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "healthy"
        assert "timestamp" in data
        print(f"✅ Health check passed: {data}")

    def test_api_root(self):
        """Test /api/ returns API info"""
        response = requests.get(f"{BASE_URL}/api/")
        assert response.status_code == 200
        data = response.json()
        assert "message" in data
        assert "version" in data
        print(f"✅ API root passed: {data}")


class TestLocationsEndpoint:
    """Location SEO data endpoint tests"""
    
    def test_get_all_locations(self):
        """Test /api/locations returns all 5 locations"""
        response = requests.get(f"{BASE_URL}/api/locations")
        assert response.status_code == 200
        data = response.json()
        assert len(data) == 5, f"Expected 5 locations, got {len(data)}"
        
        # Verify all expected locations are present
        location_slugs = [loc["slug"] for loc in data]
        expected_slugs = ["paris-16", "paris-17", "paris-8", "neuilly-sur-seine", "levallois-perret"]
        for slug in expected_slugs:
            assert slug in location_slugs, f"Missing location: {slug}"
        print(f"✅ All 5 locations returned")
    
    def test_get_paris_16_location(self):
        """Test /api/locations/paris-16 returns correct data"""
        response = requests.get(f"{BASE_URL}/api/locations/paris-16")
        assert response.status_code == 200
        data = response.json()
        assert data["name"] == "Paris 16ème"
        assert data["postal_code"] == "75016"
        assert "neighborhoods" in data
        assert len(data["neighborhoods"]) > 0
        print(f"✅ Paris 16 location data: {data['name']}")
    
    def test_get_paris_17_location(self):
        """Test /api/locations/paris-17 returns correct data (siège social)"""
        response = requests.get(f"{BASE_URL}/api/locations/paris-17")
        assert response.status_code == 200
        data = response.json()
        assert data["name"] == "Paris 17ème"
        assert data["postal_code"] == "75017"
        print(f"✅ Paris 17 location data: {data['name']}")
    
    def test_get_neuilly_location(self):
        """Test /api/locations/neuilly-sur-seine returns correct data"""
        response = requests.get(f"{BASE_URL}/api/locations/neuilly-sur-seine")
        assert response.status_code == 200
        data = response.json()
        assert data["name"] == "Neuilly-sur-Seine"
        assert data["postal_code"] == "92200"
        print(f"✅ Neuilly location data: {data['name']}")
    
    def test_get_nonexistent_location(self):
        """Test /api/locations/invalid returns 404"""
        response = requests.get(f"{BASE_URL}/api/locations/invalid-location")
        assert response.status_code == 404
        print(f"✅ Invalid location returns 404 as expected")


class TestServicesEndpoint:
    """Services endpoint tests"""
    
    def test_get_all_services(self):
        """Test /api/services returns service list"""
        response = requests.get(f"{BASE_URL}/api/services")
        assert response.status_code == 200
        data = response.json()
        assert len(data) >= 5, f"Expected at least 5 services, got {len(data)}"
        
        # Verify each service has required fields
        for service in data:
            assert "id" in service
            assert "name" in service
            assert "description" in service
        print(f"✅ Services endpoint returned {len(data)} services")


class TestContactEndpoint:
    """Contact form submission tests"""
    
    def test_contact_form_submission_success(self):
        """Test POST /api/contact with valid data"""
        payload = {
            "name": "TEST_Jean Dupont",
            "email": "test@example.com",
            "phone": "0612345678",
            "location": "Paris 17ème",
            "service": "Dépannage PC",
            "message": "Test message for contact form"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        assert "id" in data
        assert len(data["id"]) > 0
        print(f"✅ Contact form submission successful, ID: {data['id']}")
    
    def test_contact_form_minimal_data(self):
        """Test POST /api/contact with only required fields"""
        payload = {
            "name": "TEST_Minimal User",
            "email": "minimal@test.com",
            "message": "Minimal test message"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data["success"] == True
        print(f"✅ Contact form with minimal data successful")
    
    def test_contact_form_missing_name(self):
        """Test POST /api/contact without name field"""
        payload = {
            "email": "noname@test.com",
            "message": "Message without name"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422, f"Expected 422 for missing name, got {response.status_code}"
        print(f"✅ Contact form validation for missing name works")
    
    def test_contact_form_missing_email(self):
        """Test POST /api/contact without email field"""
        payload = {
            "name": "TEST_No Email",
            "message": "Message without email"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422, f"Expected 422 for missing email, got {response.status_code}"
        print(f"✅ Contact form validation for missing email works")
    
    def test_contact_form_missing_message(self):
        """Test POST /api/contact without message field"""
        payload = {
            "name": "TEST_No Message",
            "email": "nomessage@test.com"
        }
        response = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert response.status_code == 422, f"Expected 422 for missing message, got {response.status_code}"
        print(f"✅ Contact form validation for missing message works")


if __name__ == "__main__":
    pytest.main([__file__, "-v"])
