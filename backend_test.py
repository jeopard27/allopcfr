import requests
import sys
from datetime import datetime
import json

class AllopcdepannageAPITester:
    def __init__(self):
        self.base_url = "https://allo-pc-preview.preview.emergentagent.com/api"
        self.tests_run = 0
        self.tests_passed = 0
        self.errors = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}" if endpoint else self.base_url
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers, timeout=10)

            print(f"   Status: {response.status_code}")
            
            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    return True, response.json()
                except:
                    return True, response.text
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    error_detail = response.json()
                except:
                    error_detail = response.text
                
                self.errors.append({
                    "test": name,
                    "endpoint": endpoint,
                    "expected": expected_status,
                    "actual": response.status_code,
                    "error": error_detail
                })
                return False, error_detail

        except requests.exceptions.RequestException as e:
            print(f"❌ Failed - Connection Error: {str(e)}")
            self.errors.append({
                "test": name,
                "endpoint": endpoint,
                "expected": expected_status,
                "error": f"Connection Error: {str(e)}"
            })
            return False, {}
        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.errors.append({
                "test": name,
                "endpoint": endpoint,
                "expected": expected_status,
                "error": str(e)
            })
            return False, {}

    def test_root_endpoint(self):
        """Test API root endpoint"""
        return self.run_test(
            "API Root",
            "GET",
            "",
            200
        )

    def test_health_check(self):
        """Test health check endpoint"""
        return self.run_test(
            "Health Check",
            "GET", 
            "health",
            200
        )

    def test_get_locations(self):
        """Test get all locations"""
        success, response = self.run_test(
            "Get All Locations",
            "GET",
            "locations",
            200
        )
        
        if success and isinstance(response, list):
            print(f"   Found {len(response)} locations")
            expected_locations = ["Paris 16ème", "Paris 17ème", "Paris 8ème", "Neuilly-sur-Seine", "Levallois-Perret"]
            found_locations = [loc.get('name') for loc in response]
            
            for expected in expected_locations:
                if expected not in found_locations:
                    print(f"   ❌ Missing location: {expected}")
                    return False
                else:
                    print(f"   ✅ Found location: {expected}")
            
            return True
        return success

    def test_get_specific_location(self):
        """Test get specific location by slug"""
        test_slugs = ['paris-16', 'paris-17', 'paris-8', 'neuilly-sur-seine', 'levallois-perret']
        
        for slug in test_slugs:
            success, response = self.run_test(
                f"Get Location: {slug}",
                "GET",
                f"locations/{slug}",
                200
            )
            
            if success and isinstance(response, dict):
                required_fields = ['name', 'slug', 'title', 'meta_description', 'h1', 'neighborhoods', 'postal_code']
                for field in required_fields:
                    if field not in response:
                        print(f"   ❌ Missing field: {field}")
                        return False
                
                # Check PC/Mac mentions
                title_lower = response.get('title', '').lower()
                desc_lower = response.get('meta_description', '').lower()
                h1_lower = response.get('h1', '').lower()
                
                has_pc = any('pc' in text for text in [title_lower, desc_lower, h1_lower])
                has_mac = any('mac' in text for text in [title_lower, desc_lower, h1_lower])
                
                if not (has_pc and has_mac):
                    print(f"   ❌ Missing PC/Mac mentions in SEO content")
                    return False
                else:
                    print(f"   ✅ PC and Mac mentioned in SEO content")
            else:
                return False
        
        return True

    def test_get_services(self):
        """Test get services endpoint"""
        success, response = self.run_test(
            "Get Services",
            "GET",
            "services",
            200
        )
        
        if success and isinstance(response, list):
            print(f"   Found {len(response)} services")
            for service in response:
                required_fields = ['id', 'name', 'description', 'icon']
                for field in required_fields:
                    if field not in service:
                        print(f"   ❌ Service missing field: {field}")
                        return False
            print(f"   ✅ All services have required fields")
            return True
        return success

    def test_contact_form_valid(self):
        """Test contact form submission with valid data"""
        contact_data = {
            "name": "Jean Dupont",
            "email": "jean.dupont@test.fr",
            "phone": "06 12 34 56 78",
            "location": "Paris 17ème",
            "service": "Dépannage PC",
            "message": "Mon PC ne démarre plus depuis ce matin. Pouvez-vous intervenir ?"
        }
        
        success, response = self.run_test(
            "Contact Form - Valid Data",
            "POST",
            "contact",
            200,
            data=contact_data
        )
        
        if success and isinstance(response, dict):
            if response.get('success') != True:
                print(f"   ❌ Expected success=True, got {response.get('success')}")
                return False
            if 'id' not in response:
                print(f"   ❌ Missing contact ID in response")
                return False
            print(f"   ✅ Contact created with ID: {response.get('id')}")
            return True
        return success

    def test_contact_form_missing_required(self):
        """Test contact form with missing required fields"""
        invalid_data = {
            "name": "Jean Dupont",
            # Missing email and message
            "phone": "06 12 34 56 78"
        }
        
        success, response = self.run_test(
            "Contact Form - Missing Required Fields",
            "POST",
            "contact",
            422,  # Validation error
            data=invalid_data
        )
        
        # For this test, getting 422 (validation error) is expected
        return success

    def test_invalid_location_slug(self):
        """Test invalid location slug"""
        return self.run_test(
            "Invalid Location Slug",
            "GET",
            "locations/invalid-location",
            404
        )

def main():
    print("🚀 Starting Allo PC Dépannage API Tests")
    print("=" * 50)
    
    tester = AllopcdepannageAPITester()
    
    # Run all tests
    tests = [
        tester.test_root_endpoint,
        tester.test_health_check,
        tester.test_get_locations,
        tester.test_get_specific_location,
        tester.test_get_services,
        tester.test_contact_form_valid,
        tester.test_contact_form_missing_required,
        tester.test_invalid_location_slug
    ]
    
    for test in tests:
        try:
            test()
        except Exception as e:
            print(f"❌ Test {test.__name__} crashed: {str(e)}")
            tester.errors.append({
                "test": test.__name__,
                "error": f"Test crashed: {str(e)}"
            })

    # Print final results
    print("\n" + "=" * 50)
    print("📊 TEST RESULTS")
    print("=" * 50)
    print(f"Tests run: {tester.tests_run}")
    print(f"Tests passed: {tester.tests_passed}")
    print(f"Tests failed: {tester.tests_run - tester.tests_passed}")
    print(f"Success rate: {(tester.tests_passed / tester.tests_run * 100) if tester.tests_run > 0 else 0:.1f}%")
    
    if tester.errors:
        print("\n❌ FAILURES:")
        for i, error in enumerate(tester.errors, 1):
            print(f"{i}. {error['test']}: {error.get('error', 'Unknown error')}")
    
    # Return proper exit code
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())